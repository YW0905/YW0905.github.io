(function () {
  var content;
  var observer;
  var retryHandle;

  function getContent() {
    if (content && document.body.contains(content)) {
      return content;
    }
    content = document.querySelector('.content');
    return content;
  }

  function scheduleTypeset(delay) {
    if (typeof delay !== 'number') {
      delay = 0;
    }
    if (retryHandle) {
      clearTimeout(retryHandle);
    }
    retryHandle = setTimeout(typeset, delay);
  }

  function typeset() {
    var target = getContent();
    if (!target) {
      scheduleTypeset(100);
      return;
    }
    if (!window.MathJax || typeof window.MathJax.typesetPromise !== 'function') {
      scheduleTypeset(100);
      return;
    }
    var startup = window.MathJax.startup && window.MathJax.startup.promise
      ? window.MathJax.startup.promise
      : Promise.resolve();
    startup.then(function () {
      window.MathJax.typesetPromise([target]).catch(function (err) {
        console.error('MathJax typeset failed', err);
      });
    });
  }

  function observeContent() {
    var target = getContent();
    if (!target) {
      scheduleTypeset(100);
      return;
    }
    scheduleTypeset(0);
    if (observer) {
      observer.disconnect();
    }
    observer = new MutationObserver(function (mutations) {
      var needsTypeset = mutations.some(function (mutation) {
        return mutation.addedNodes && mutation.addedNodes.length;
      });
      if (needsTypeset) {
        scheduleTypeset(0);
      }
    });
    observer.observe(target, { childList: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeContent);
  } else {
    observeContent();
  }

  window.addEventListener('load', typeset);
})();
