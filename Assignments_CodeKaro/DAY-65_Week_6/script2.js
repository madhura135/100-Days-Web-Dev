// The Exercise

// Goal: Write a function findDuplicates(users) that scans an array of user objects.
// It should find and return any email or telephone number that appears more than once.
// Rules:
// • Do not use built-in array methods
// (filter, find, some, includes, indexOf, forEach, map, etc.).
// • Do not use Set or Map.
// • Use standard for loops, if conditions, and basic index
// assignment (e.g., result[result.length] = item) to build your output.

const users = [
  { name: "Aarav", email: "aarav@example.com", tel: "9876543210" },
  { name: "Priya", email: "priya@example.com", tel: "9123456789" },
  { name: "Rohan", email: "aarav@example.com", tel: "9988776655" }, // Duplicate email
  { name: "Sneha", email: "sneha@example.com", tel: "9123456789" }, // Duplicate tel
  { name: "Vikram", email: "aarav@example.com", tel: "9123456789" }, // Both duplicated again
];

function findDuplicates(users) {
  const duplicateEmails = [];
  const duplicateTels = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = i + 1; j < users.length; j++) {
      
      // Check Email
      if (users[i].email === users[j].email) {
        // Check, if we already recorded this email
        let alreadyRecorded = false;
        for (let k = 0; k < duplicateEmails.length; k++) {
          if (duplicateEmails[k] === users[j].email) {
            alreadyRecorded = true;
            break; // Stop checking early once found
          }
        }
        
        if (!alreadyRecorded) {
          duplicateEmails[duplicateEmails.length] = users[j].email;
        }
      }

      // Check Telephone
      if (users[i].tel === users[j].tel) {
        let alreadyRecorded = false;
        for (let k = 0; k < duplicateTels.length; k++) {
          if (duplicateTels[k] === users[j].tel) {
            alreadyRecorded = true;
            break;
          }
        }
        
        if (!alreadyRecorded) {
          duplicateTels[duplicateTels.length] = users[j].tel;
        }
      }
      
    }
  }

  return {
    duplicateEmails: duplicateEmails,
    duplicateTels: duplicateTels,
  };
}
