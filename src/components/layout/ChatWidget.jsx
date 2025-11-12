import { MessageCircle, X } from 'lucide-react';

function ChatWidget({ chatOpen, setChatOpen }) {
  return (
    <>
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl z-50">
          <div className="bg-emerald-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat with us</h3>
            <button onClick={() => setChatOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="bg-white rounded-lg p-3 shadow mb-3">
              <p className="text-sm text-gray-700">
                Hi! How can we help you plan your perfect event?
              </p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
}

export default ChatWidget;