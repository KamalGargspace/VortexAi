import Conversation from "../models/conversation.model.js";

export const createConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    console.log(userId);

    const conversation = await Conversation.create({
      userId: userId,
    });

    return res.status(200).json({
      message: "conversation created successfully",
      conversation,
    });
  } catch (error) {
    res.status(500).json({
      message: `create conversation error ${error}`,
    });
  }
};

export const getConversation = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];
    console.log(userId);

    const conversations = await Conversation.find({
      userId: userId,
    }).sort({ updatedAt: -1 });

    return res.status(200).json({
      message: "conversation fetched successfully",
      conversations,
    });
  } catch (error) {
    res.status(500).json({
      message: `get conversation error ${error}`,
    });
  }
};
