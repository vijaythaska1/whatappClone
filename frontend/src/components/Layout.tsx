import Sidebar from './Sidebar';
import ChatArea from './ChatArea';

function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <ChatArea />
    </div>
  )
}

export default Layout