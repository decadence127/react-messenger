const MessageModel = require("../Entities/messageEntity");

class MessageService {
  async saveMessage(msgObject) {
    const msg = await MessageModel.create(msgObject);
    console.log(MessageModel.findOne(msgObject.recieverId));
  }
}
module.exports = new MessageService();
