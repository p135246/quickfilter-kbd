async function setQFAuthor ()
{
   let messageList = await browser.mailTabs.getSelectedMessages();
   let message = messageList.messages[0];
   let text = { text: message.author, author: true };
   await browser.mailTabs.setQuickFilter({ text });
};

async function setQFSubject ()
{
   let messageList = await browser.mailTabs.getSelectedMessages();
   let message = messageList.messages[0];
   let text = { text: message.subject, subject: true };
   await browser.mailTabs.setQuickFilter({ text });
};

async function setQFRecipients ()
{
   let messageList = await browser.mailTabs.getSelectedMessages();
   let message = messageList.messages[0];
   let text = { text: message.recipients.join(", "), recipients: true };
   await browser.mailTabs.setQuickFilter({ text });
};

messenger.commands.onCommand.addListener(async (command) => {
  switch (command) {
    case "select-by-author":
      setQFAuthor();
      break;
    case "select-by-subject":
      setQFSubject();
      break;
    case "select-by-recipients":
      setQFRecipients();
      break;
  }
});
