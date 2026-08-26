import React from 'react'
import api from '../../utils/axios'

async function sendMessage(payload) {
  try {
    const {data} = await api.post("/api/agent/chat",payload)
    return data
  } catch (error) {
    console.error("Error from backend:", error.response?.data || error.message);
    return null
  }
}

export default sendMessage