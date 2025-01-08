import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Avatar } from 'primereact/avatar'
import PropTypes from 'prop-types'
import ChatWindow from './ChatWindow'

import driver from "../../assets/driver.jpeg"

const SideBarChat = ({ visibleChat, setVisibleChat }) => {
    const [searchChat, setSearchChat] = useState("")
    const [selectedChat, setSelectedChat] = useState(null)

    const messageHistory = [
        {
            id: 1,
            sender: "John Doe",
            location: "Mandroseza",
            message: "Lorem ipsum dolor sit amet",
            time: "12:00",
            avatar: driver
        },
        {
            id: 2,
            sender: "Jane Smith",
            location: "Ambohijatovo",
            message: "Consectetur adipiscing elit",
            time: "11:00",
            avatar: driver
        },
    ]

    return (
        <Sidebar
            visible={visibleChat}
            position='right'
            className="font-poppins text-xs"
            onHide={() => setVisibleChat(false)}
            content={() => (
                <div className="">
                    {!selectedChat ? (
                        <>
                            <div className='flex flex-row justify-between mx-4'>
                                <h1 className="text-lg font-poppins">Discussions</h1>
                                <i className="pi pi-ellipsis-v mt-5 text-sm cursor-pointer" title="Options"></i>
                            </div>

                            <div className="p-inputgroup flex h-10 w-72 mx-4 rounded-3xl" style={{ border: '1px solid #D9D9D9' }}>
                                <InputText
                                    value={searchChat}
                                    onChange={(e) => setSearchChat(e.target.value)}
                                    placeholder="Rechercher une discussion..."
                                    className="bg-transparent indent-3 w-20 h-10 font-poppins text-xs outline border border-none outline-none"
                                />
                                <Button icon="pi pi-search" className="bg-transparent text-teal border border-none outline outline-none" />
                            </div>

                            <div className="px-2 mt-2 overflow-y-auto h-[80vh]">
                                {messageHistory.map((message) => (
                                    <div
                                        key={message.id}
                                        className="bg-white hover:bg-teal hover:bg-opacity-35 cursor-pointer hover:rounded -mt-1 p-4 
                                        transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                                        onClick={() => setSelectedChat(message)}
                                    >
                                        <div className="flex flex-row justify-between space-x-3">
                                            <div className="flex flex-row space-x-2">
                                                <Avatar
                                                    image={message.avatar}
                                                    alt="Avatar user"
                                                    shape='circle'
                                                    className='w-10 h-10'
                                                />
                                                <div className="flex flex-col ml-2">
                                                    <span className="font-poppins text-sm font-semibold">{message.sender}</span>
                                                    <span className="font-poppins text-xs text-gray-500">{message.message}</span>
                                                </div>
                                            </div>
                                            <span className="font-poppins text-xs text-gray-500 mt-2">{message.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <ChatWindow
                            chat={selectedChat}
                            onClose={() => setSelectedChat(null)}
                        />
                    )}
                </div>
            )}
        ></Sidebar>
    )
}

SideBarChat.propTypes = {
    visibleChat: PropTypes.bool,
    setVisibleChat: PropTypes.func,
}

export default SideBarChat