const contact = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('Bug: Bonjour je m\'appelle ' + this.prenom);
  },
  helloASync: function() {
    setTimeout(function() {
      console.log('Bug: Bonjour je m\'appelle ' + this.prenom);
    }, 1000);
  },
}

contact.helloSync();
contact.helloASync();

const contactES3 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES3: Bonjour je m\'appelle ' + this.prenom);
  },
  helloASync: function() {
    const that = this;
    setTimeout(function() {
      console.log('ES3: Bonjour je m\'appelle ' + that.prenom);
    }, 1000);
  },
}

contactES3.helloSync();
contactES3.helloASync();

const contactES5 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES5: Bonjour je m\'appelle ' + this.prenom);
  },
  helloASync: function() {
    setTimeout(this.helloSync.bind(this), 1000);
  },
}

/*
Function.prototype.bind = function(that) {
  return function() {
    this.call(that);
  };
};
*/

contactES5.helloSync();
contactES5.helloASync();

const contactES6 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES6: Bonjour je m\'appelle ' + this.prenom);
  },
  helloASync() {
    setTimeout(() => {
      // pas arguments, this, super, new.target
      console.log('ES6: Bonjour je m\'appelle ' + this.prenom);
    }, 1000);
  },
}

contactES6.helloSync();
contactES6.helloASync();

/*
var btn = document.createElement('button');
btn.innerHTML = 'Clic moi';
btn.addEventListener('click', (event) => {
  console.log(this.innerHTML); // undefined
  console.log(event.target.innerHTML); // Clic moi
});
*/
