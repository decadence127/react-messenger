class MessageController {
  async sendMessage(req, res, next) {}
  async receiveMessage(req, res, next) {
    try {
      const receiverId = req.params.id;
      const { senderId, sendDate, msgContent } = req.body;
      await MessageService.saveMessage({
        senderId,
        sendDate,
        msgContent,
        receiverId,
      });
      console.log(body);
      console.log(uid);
    } catch (e) {
      console.error(e);
    }
  }
}
module.exports = new MessageController();
