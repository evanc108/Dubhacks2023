document.addEventListener("DOMContentLoaded", function () {
    // Sample data for a list of contacts
    const contactsData = [
        { id: '1', name: 'John Doe', phone: '123-456-7890' },
        { id: '2', name: 'Jane Smith', phone: '987-654-3210' },
        { id: '3', name: 'Alice Johnson', phone: '555-555-5555' },
        { id: '4', name: 'Bob Brown', phone: '111-222-3333' },
        { id: '5', name: 'Nicole', phone: '123-456-7890' },
        { id: '6', name: 'John', phone: '987-654-3210' },
        { id: '7', name: 'Edward', phone: '555-555-5555' },
        { id: '8', name: 'Shawna', phone: '111-222-3333' },
        { id: '9', name: 'Evan', phone: '123-456-7890' },
        { id: '10', name: 'Sydney', phone: '987-654-3210' },
        { id: '11', name: 'Kaylin', phone: '555-555-5555' },
        { id: '12', name: 'Lena', phone: '111-222-3333' },
    ];

    const renderContactItem = (contact) => {
        const contactItem = document.createElement("div");
        contactItem.className = "contact-item";
        contactItem.innerHTML = `
            <div class="contact-name">${contact.name}</div>
            <div class="contact-phone">${contact.phone}</div>
        `;
        return contactItem;
    };

    const loadContacts = () => {
        const contactsList = document.getElementById("contacts-list");
        contactsList.innerHTML = "";

        // Group contacts by the first letter of their name
        const groupedContacts = {};

        contactsData.forEach((contact) => {
            const firstLetter = contact.name[0].toUpperCase();
            if (!groupedContacts[firstLetter]) {
                groupedContacts[firstLetter] = [];
            }
            groupedContacts[firstLetter].push(contact);
        });

        // Sort the groups by their first letter
        const sortedGroups = Object.keys(groupedContacts).sort();

        sortedGroups.forEach((letter) => {
            const groupTitle = document.createElement("div");
            groupTitle.className = "group-title";
            groupTitle.textContent = letter;
            contactsList.appendChild(groupTitle);

            // Sort contacts within each group alphabetically
            groupedContacts[letter].sort((a, b) => a.name.localeCompare(b.name)).forEach((contact) => {
                contactsList.appendChild(renderContactItem(contact));
            });
        });
    };

    loadContacts();
});
