import React from 'react'
import { eventMainSidebarData } from '../../CONSTANT'
import { Link } from 'react-router-dom'
import { HambergerMenu, TriangleLogo } from 'iconsax-react'
import SideBarItem from './SideBarItem'

const SideBar = () => {
    return (
        <div className="hidden h-screen w-64 mdl:block fixed border-r border-solid border-lightWhite">
            {/* Navigation */}
            <div className="border-b border-solid border-lightWhite">
                <div className="my-2 mx-6 flex items-center">
                    <Link href="/home" className="flex items-center">
                        <TriangleLogo size="32" color="#FF8A65" />
                        <h3 className="text-white text-xl font-normal whyte leading-loose ml-2.5">
                            Host-It
                        </h3>
                    </Link>
                    <div className="ml-10 cursor-pointer">
                        <HambergerMenu
                            size="32"
                            color="#FF8A65"
                        />
                    </div>
                </div>
            </div>

            {/* as */}
            <div className="m-6">
                {eventMainSidebarData.map((menu, index) => (
                    <SideBarItem key={index} menu={menu} />
                ))}
            </div>
        </div>
    )
}

export default SideBar