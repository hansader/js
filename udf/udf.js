let visitorCount = 0;

function getVisitorDetails() {
    let name;
    do {
        name = prompt("Please enter your name (or type 'exit' to leave):");
        if (name === "exit") return { name: "exit", purpose: "exit" };
        if (!name) console.log("Name cannot be empty. Please try again.");
    } while (!name);
    
    let purpose;
    let attempts = 0;
    while (attempts < 3) {
        purpose = prompt("Enter your purpose of visit (meeting/delivery/interview):");
        if (validatePurpose(purpose)) return { name, purpose };
        console.log("Invalid purpose. Please enter a valid purpose.");
        attempts++;
    }
    return { name: "invalid", purpose: "invalid" };
}

function validatePurpose(purpose) {
    return ["meeting", "delivery", "interview"].includes(purpose);
}

function handleVisitor(name, purpose) {
    if (name === "exit") {
        console.log("Reception system shutting down.");
        return false;
    }
    if (name === "invalid") {
        console.log("Too many invalid attempts. Visitor entry denied.");
        return true;
    }
    visitorCount++;
    console.log(`Thank you, ${name}. You may proceed for your ${purpose}. Visitor count: ${visitorCount}`);
    return true;
}

let reception = true;
do {
    console.log("Welcome to the Reception System");
    let { name, purpose } = getVisitorDetails();
    reception = handleVisitor(name, purpose);
} while (reception);
