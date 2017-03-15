window.onload = function() {
  var tabsControl = document.querySelector('.tab-controls');

  tabsControl.addEventListener('click', function(evt){
    if(!evt.target.classList.contains('tab-control') || evt.target.classList.contains('tab-control--active')) {
      return;
    }

    var tabsControlArray = document.querySelectorAll('.tab-control');
    tabsControlArray = toArray(tabsControlArray);

  tabsControlArray.forEach(function(tabsControlItem) {
    if (tabsControlItem === evt.target) {
      tabsControlItem.classList.add('tab-control--active');
      } else {
        tabsControlItem.classList.remove('tab-control--active');
      }
    });

  var tabsContent = document.querySelectorAll('.tab-content');
  tabsContent = toArray(tabsContent);

    tabsContent.forEach(function(tabContent) {
      if (tabContent.classList.contains(evt.target.dataset.tab)) {
        tabContent.classList.add('tab-content--active');
      } else {
        tabContent.classList.remove('tab-content--active');
      }
    });
  });

  var form = document.querySelector('form')
  var name = document.querySelector('#name')
  var tel = document.querySelector('#tel')
  var mail = document.querySelector('#mail')
  var text = document.querySelector('#text')

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alertDanger.classList.remove('alert--open');
    alertSuccess.classList.remove('alert--open');

      if (isNameValid() && isTelValid() && isMailValid() && isTextValid()) {
      alertSuccess.classList.add('alert--open');
        } else {
        alertDanger.classList.add('alert--open');
        }
    });

      function isNameValid() {
        if (name.value !== '' && name.value.match(/[0-9]/ig)) {
          return true;
          } else {
            name.value.add('error');
            return false;
          }
        }

      function isTelValid() {
        if (tel.value !== '' && tel.value.match(/\+7[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/ig)) {
          return true;
          } else {
            return false;
          }
        }

      function isMailValid() {
        if (mail.value !== '' && mail.value.match() !== (/^[^@]+@[^@.]+\.[^@]+$/ig) !== null) {
            return true;
          } else {
            return false;
          }
        }

      function isTextValid() {
        if (text.value !== '' && text.value.length < 20 ) {
          return true;
          } else {
            return false;
          }
        }

  var tabsControlArray = document.querySelectorAll('.tab-control');
  tabsControlArray = toArray(tabsControlArray);

  var btn =  document.querySelector('.js-modal-open');
  var content = document.querySelector('.modal-content');
  var overlay = document.querySelector('.modal-overlay');
  var btnClose = document.querySelector('.js-modal-close');

  btn.addEventListener('click', function(evt){
    event.preventDefault()
    overlay.classList.add('active');
    content.classList.add('active');
  });

  btnClose.addEventListener('click', function(evt){
    event.preventDefault()
    content.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function(evt) {
    event.preventDefault()
    content.classList.remove('active');
    overlay.classList.remove('active');
});

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      content.classList.remove('active');
      overlay.classList.remove('active');
    }
  });

  var accordeonItem = document.querySelectorAll('.accordeon-item');
  accordeonItem = toArray(accordeonItem);

  accordeonItem.forEach(function(item, i, array){
    item.addEventListener('click', function(){
      array.forEach(function(n){
        n.classList.remove('accordeon-item--active');
      });
      item.classList.add('accordeon-item--active');
    });
  });

  var nav = document.querySelector('.nav');
  var navTopInit = nav.getBoundingClientRect().top;

  window.addEventListener('scroll', function(evt) {
    if (window.pageYOffset < navTopInit) {
      nav.classList.remove('fixed');
    } else {
      nav.classList.add('fixed');
    }
  });

  var form = document.querySelector('form');
  var name = document.querySelector('#name');
  var tel = document.querySelector('#tel');
  var mail = document.querySelector('#mail');
  var textarea = document.querySelector('#textarea');

  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var alertDanger = document.querySelector('.alert--danger');
    var alertSuccess = document.querySelector('.alert--success');

  alertDanger.classList.remove('alert--open');
  alertSuccess.classList.remove('alert--open');

  var nameValid = isNameValid();
  var telValid = isTelValid();
  var mailValid = isMailValid();
  var textareaValid = isTextareaValid();

    if (nameValid && telValid && mailValid && textareaValid) {
      alertSuccess.classList.add('alert--open');
      } else {
        alertDanger.classList.add('alert--open');
      }
    });

  var fields = [name, tel, mail, textarea];

  fields.forEach(function(filed) {
    filed.addEventListener('focus', function(evt) {
      filed.classList.remove('error');
      });

    filed.addEventListener('blur', function(evt) {
      if (fields === name) {
        isNameValid();
        } else if (fields === tel) {
        isTelValid();
        } else if (fields === mail) {
        isMailValid();
        } else if (fields === textarea) {
        isTextareaValid();
        }
      });
    });

      function isNameValid() {
        name.classList.remove('error');
          if (name.value !== '' && name.value.match(/[0-9]/ig) === null) {
            return true;
        } else {
        name.classList.add('error');
          return false;
      }
    }

      function isTelValid() {
        tel.classList.remove('error');
          if (tel.value !== '' && tel.value.match(/\+[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/ig) !== null) {
            return true;
          } else {
          tel.classList.add('error');
            return false;
          }
       }

      function isMailValid() {
        mail.classList.remove('error');
          if (mail.value !== '' && mail.value.match(/^[^@]+@[^@.]+\.[^@]+$/ig) !== null) {
            return true;
          } else {
          mail.classList.add('error');
            return false;
        }
    }

      function isTextareaValid() {
        textarea.classList.remove('error');
          if (textarea.value !== '' && textarea.value.length < 21) {
            return true;
          } else {
          textarea.classList.add('error');
            return false;
        }
    }

  var alertDanger = document.querySelector('.alert--danger');
  var alertSuccess = document.querySelector('.alert--success');

  alertDanger.addEventListener('click', function(evt) {
    event.preventDefault()
    alertDanger.classList.remove('alert--open');
  });

  alertSuccess.addEventListener('click', function(evt) {
    event.preventDefault()
    alertSuccess.classList.remove('alert--open');
    });

  var counter = 0;
  var element = document.querySelector('body');
  var element2 = document.querySelector('.sticks .sticks-item:first-child span');

  element.addEventListener('click', function(event) {
    element2.innerHTML = ++counter;
  });

  var element3 = document.querySelector('.sticks .sticks-item:nth-child(2) span')

  element.addEventListener('mousemove', function(event) {
    element3.innerHTML = event.x + 'x' + event.y;
  });

  var element4 = document.querySelector('.sticks .sticks-item:last-child span')
  window.addEventListener('keydown', function(event) {
  element4.innerHTML = event.key;
  });

  var btnEditor = document.querySelector('.close');
  var editor = document.querySelector('.editor');
  var editControl = document.querySelector('.editor-control');
  var save = document.querySelector('.save');
  var cancel = document.querySelector('.cancel');
  var center = document.querySelector('.center');
  var right = document.querySelector('.right');
  var left = document.querySelector('.left');
  var big = document.querySelector('.big');
  var small = document.querySelector('.small');

  editControl.classList.remove('active');

  btnEditor.addEventListener('click', function(evt) {
    evt.preventDefault();
    editor.setAttribute('contenteditable', true);
    editControl.classList.add('active');
  });

  save.addEventListener('click', function(evt){
    evt.preventDefault();
      if(localStorage) {
        localStorage.setItem('editor-content', editor.innerText)
        editor.setAttribute('contenteditable', false);
        editControl.classList.remove('active');
      }
  });


      if(localStorage) {
        if (localStorage.getItem('editor-content')) {
        editor.innerText = localStorage.getItem('editor-content');
      } else {
        localStorage.setItem('editor-content', editor.innerText);
      }
    }

  cancel.addEventListener('click', function(evt){
    evt.preventDefault();
    editor.innerText = localStorage.getItem('editor-content');
    editor.setAttribute('contenteditable', false);
    editControl.classList.remove('active');
  });

  left.addEventListener('click', function(evt) {
    evt.preventDefault();
    editor.classList.remove('text-right');
    editor.classList.remove('text-center');
    editor.classList.add('text-left');
  });

  right.addEventListener('click', function(evt) {
    evt.preventDefault();
    editor.classList.remove('text-left');
    editor.classList.remove('text-center');
    editor.classList.add('text-right');
  });

  center.addEventListener('click', function(evt) {
    evt.preventDefault();
    editor.classList.remove('text-left');
    editor.classList.remove('text-right');
    editor.classList.add('text-center');
  });

  if(localStorage) {
    if(localStorage.getItem('editor-font-size')) {
    editor.style.fontSize = localStorage.getItem('editor-font-size');
    } else {
    editor.style.fontSize = '16px';
    }
  } else {
    editor.style.fontSize = '16px';
    }

  big.addEventListener('click', function(evt) {
    evt.preventDefault();
    var fontSize = editor.style.fontSize;
    fontSize = parseInt(fontSize);
    fontSize = fontSize + 2 + 'px';
    editor.style.fontSize = fontSize;
      if (localStorage) {
      localStorage.setItem('editor-font-size', fontSize);
    }
  });

  small.addEventListener('click', function(evt) {
    evt.preventDefault();
    var fontSize = editor.style.fontSize;
    fontSize = parseInt(fontSize);
    fontSize = fontSize - 2 + 'px';
    editor.style.fontSize = fontSize;
      if (localStorage) {
        localStorage.setItem('editor-font-size', fontSize);
      }
  });

  function toArray(collection) {
  return Array.prototype.slice.call(collection);
}

}
