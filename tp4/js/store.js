// store.js

var contactStore = (function () {
    // Récupération de la liste des contacts depuis le localStorage ou création d'une liste vide
    let contactListString = localStorage.getItem("contactList");
    var contactList = contactListString ? JSON.parse(contactListString) : [];
  
    return {
      // Ajoute un contact
      add: function (_name, _firstname, _date, _address, _mail) {
        var contact = {
          name: _name,
          firstname: _firstname,
          date: _date,
          address: _address,
          mail: _mail,
        };
        contactList.push(contact);
        localStorage.setItem("contactList", JSON.stringify(contactList));
        return contactList;
      },
  
      // Réinitialise la liste des contacts
      reset: function () {
        localStorage.removeItem("contactList");
        contactList = [];
        return contactList;
      },
  
      // Récupère la liste des contacts
      getList: function () {
        return contactList;
      },
    };
  })();
  