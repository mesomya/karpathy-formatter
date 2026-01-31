// Karpathy Tweet Formatter
// Adds line breaks after sentences in @karpathy's tweets for better readability

const KARPATHY_HANDLE = 'karpathy';

function isKarpathyTweet(article) {
  const userNameEl = article.querySelector('[data-testid="User-Name"]');
  if (userNameEl) {
    const authorLink = userNameEl.querySelector(`a[href="/${KARPATHY_HANDLE}"]`);
    if (authorLink) return true;
    const text = userNameEl.textContent.toLowerCase();
    if (text.includes(`@${KARPATHY_HANDLE}`)) return true;
  }
  
  const profileLinks = article.querySelectorAll(`a[href="/${KARPATHY_HANDLE}"]`);
  if (profileLinks.length > 0) return true;
  
  return false;
}

function addLineBreaks(textElement) {
  if (textElement.innerHTML.includes('<br>')) return false;

  const spans = textElement.querySelectorAll('span');
  let modified = false;

  spans.forEach(span => {
    if (span.querySelector('span, a, img')) return;
    
    const html = span.innerHTML;
    const newHtml = html
      .replace(/\. /g, '.<br><br>')
      .replace(/\? /g, '?<br><br>')
      .replace(/! /g, '!<br><br>');
    
    if (newHtml !== html) {
      span.innerHTML = newHtml;
      modified = true;
    }
  });

  return modified;
}

function processAllTweets() {
  const articles = document.querySelectorAll('article');
  
  articles.forEach(article => {
    if (!isKarpathyTweet(article)) return;
    
    const tweetText = article.querySelector('[data-testid="tweetText"]');
    if (!tweetText) return;
    
    const showMoreBtn = article.querySelector('[data-testid="tweet-text-show-more-link"]');
    if (showMoreBtn) return;
    
    addLineBreaks(tweetText);
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedProcess = debounce(processAllTweets, 50);

processAllTweets();

const observer = new MutationObserver(() => {
  debouncedProcess();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
