import { useState } from 'react'

import { mailList } from 'constants/mail_list'
import { navbarRightItems } from 'constants/navbar_right_items'
import { notificationsList } from 'constants/notifications_list'

import Dropdown from './Dropdown'
import SideDrawer from '../SideDrawer'
import Navigation from '../Navigation'
import DropdownUser from './DropdownUser'
import Icon from 'components/Shared/Icon'

const Navbar = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  //
  const handleShowSideDrawer = (): void => setShowSideDrawer(true)
  const handleHideSideDrawer = (): void => setShowSideDrawer(false)

  return (
    <header className="bg-[#161d30] fixed left-0 top-0 right-0 xl:left-64 px-4 pt-5 pb-5 sm:px-7 z-30">
      <section className="flex items-center justify-between h-16 p-[14px] bg-white  rounded-md">
        {/* Side Drawer */}
        <SideDrawer show={showSideDrawer} hideMenu={handleHideSideDrawer}>
          <Navigation sideDrawerMenu closeMenu={handleHideSideDrawer} />
        </SideDrawer>

        {/* Left Items */}
        <div className="flex items-center font-extrabold ">
          Dashboard
        </div>

        {/* Right Items */}
        <div className="flex justify-center items-center">
          <div className="mr-5 flex items-center">
            

            <Dropdown
              dataList={notificationsList}
              buttonText="Read all Notifications"
              menuBadge="5 New"
              menuTitle="Notification"
              toggleBadge="5"
              toggleBg="#ea5455"
              toggleIcon="Notifications"
            />
          </div>
          <DropdownUser />
        </div>
      </section>
    </header>
  )
}

export default Navbar
