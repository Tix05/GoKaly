import { useState, useEffect } from 'react'
import { Avatar } from 'primereact/avatar'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import PropTypes from 'prop-types'

const ChatWindow = ({ chat, onClose }) => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [isAnimating, setIsAnimating] = useState(true)

    useEffect(() => {
        if (chat) {
            setMessages([
                {
                    id: 1,
                    sender: chat.sender,
                    location: chat.location,
                    text: "Bonjour, je souhaite faire une commande s'il vous plaît",
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isMe: false
                }
            ])

            // Trigger animation
            setIsAnimating(true)
            const animationTimer = setTimeout(() => {
                setIsAnimating(false)
            }, 500)

            return () => clearTimeout(animationTimer)
        }
    }, [chat])

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return

        const messageToSend = {
            id: messages.length + 1,
            sender: 'Me',
            text: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true
        }

        setMessages(prevMessages => [
            ...prevMessages,
            { ...messageToSend, isAnimating: true }
        ])
        setNewMessage('')

        // Remove animation after a short delay
        setTimeout(() => {
            setMessages(prevMessages =>
                prevMessages.map(msg =>
                    msg.id === messageToSend.id
                        ? { ...msg, isAnimating: false }
                        : msg
                )
            )
        }, 500)
    }

    return (
        <>
            <div className={`
                flex flex-row justify-between px-4 bg-white shadow-md mb-4
                transition-all duration-500 
                ${isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}
            `}>
                <div className="flex items-center space-x-3">
                    <Avatar
                        image={chat.avatar}
                        shape="circle"
                        className="w-10 h-10"
                    />
                    <div>
                        <h2 className="font-poppins text-sm font-semibold mt-4">{chat.sender}</h2>
                        <p className="text-xs text-gray-500 -mt-3"><i className="pi pi-map-marker text-xs"></i> {chat.location}</p>
                    </div>
                </div>
                <Button
                    icon="pi pi-times"
                    className="p-button-text p-button-rounded text-teal mt-3"
                    onClick={onClose}
                />
            </div>

            <div className="px-2 mt-2 overflow-y-auto h-[70vh] space-y-3">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`
                            flex ${message.isMe ? 'justify-end' : 'justify-start'}
                            transition-all duration-500 
                            ${message.isAnimating
                                ? 'opacity-0 translate-x-10'
                                : 'opacity-100 translate-x-0'}
                        `}
                    >
                        <div
                            className={`
                                max-w-[70%] p-3 rounded-lg 
                                ${message.isMe
                                    ? 'bg-teal text-white'
                                    : 'bg-gray-100 text-black'}
                            `}
                        >
                            <p className="text-xs">{message.text}</p>
                            <span className="text-[0.8em] opacity-60 block text-right mt-1">
                                {message.timestamp}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex-1 p-inputgroup w-[19rem] mx-2 rounded-3xl absolute bottom-6" style={{ border: '1px solid #D9D9D9' }}>
                <Button
                    icon="pi pi-paperclip"
                    className="border border-none outline outline-none bg-transparent text-neutral-500"
                />
                <InputText
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Écrivez un message..."
                    className="flex-grow border border-none outline outline-none text-xs font-poppins"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                    icon="pi pi-send"
                    onClick={handleSendMessage}
                    className="border border-none outline outline-none bg-transparent text-neutral-500"
                />
            </div>
        </>
    )
}

ChatWindow.propTypes = {
    chat: PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        message: PropTypes.string
    }),
    onClose: PropTypes.func.isRequired
}

export default ChatWindow