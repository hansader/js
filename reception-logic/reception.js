let reception = true;

do {
    console.log("Welcome to the Reception System");

    mainLoop: while (reception) {
        let visitorName = prompt("Please enter your name (or type 'exit' to leave):");
        
        if (visitorName === "exit") {
            console.log("Reception system shutting down.");
            reception = false;
            break;
        }
        
        if (!visitorName) {
            console.log("Name cannot be empty. Please try again.");
            continue;
        }
        
        let purpose;
        
        purposeLoop: while (true) {
            purpose = prompt("Enter your purpose of visit (meeting/delivery/interview):");
            
            if (purpose === "meeting" || purpose === "delivery" || purpose === "interview") {
                console.log(`Thank you, ${visitorName}. You may proceed for your ${purpose}.`);
                break mainLoop;
            } else {
                console.log("Invalid purpose. Please enter a valid purpose.");
                continue;
            }
        }
    }
    
} while (reception);
