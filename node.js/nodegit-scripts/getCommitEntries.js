var open = require("nodegit").Repo.open;

// Open the repository directory.
open("../../.git", function(err, repo) {
  if (err) {
    throw err;
  }

  // Open the master branch.
  repo.getBranch("master", function(err, branch) {
    if (err) {
      throw err;
    }

    // Create a new history event emitter.
    var history = branch.history();

    // Create a counter to only show up to 9 entries.
    var count = 0;

    // Listen for commit events from the history.
    history.on("commit", function(commit) {
      // Disregard commits past 9.
      if (++count >= 9) {
        return;
      }

      // Show the commit sha.
      console.log("commit " + commit.sha());

      // Store the author object.
      var author = commit.author();

      // Display author information.
      console.log("Authoraaa:\t" + author.name() + " <", author.email() + ">");

      // Show the commit date.
      console.log("Date:\t" + commit.date());

      // Give some space and show the message.
      console.log("\n    " + commit.message());
    });

    // Start emitting events.
    history.start();
  });
});