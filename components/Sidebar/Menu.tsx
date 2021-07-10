import React, { useState } from "react"
import { SingleMenu } from "../../data/menuData"
import { MenuTitleWrapper, MenuSubTitleWrapper, MenuTitle, MenuSubTitle, Listwrapper } from "./Sidebar.style"
import { MdKeyboardArrowRight } from "react-icons/md"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Rectangle } from "../Utils/Utility.style"

export const Menu = ({ title, subtitles }: SingleMenu) => {
  const [isOpen, SetIsOpen] = useState(false)
  const [iconColor, setIconColor] = useState("#7e7e7e")
  return (
    <ul>
      <li>
        <div className="flex-col justify-center">
          {isOpen && (
            <div className="pos-absolute-l">
              <Rectangle />
            </div>
          )}

          <MenuTitleWrapper
            onClick={() => SetIsOpen((isOpen) => !isOpen)}
            onMouseEnter={() => setIconColor("FF624E")}
            onMouseLeave={() => setIconColor("#7e7e7e")}
          >
            {isOpen ? <MenuTitle style={{ color: "#FF624E" }}>{title}</MenuTitle> : <MenuTitle>{title}</MenuTitle>}
            {isOpen ? (
              <MdKeyboardArrowDown color="#FF624E" size={24} />
            ) : (
              <MdKeyboardArrowRight color={iconColor} size={24} />
            )}
          </MenuTitleWrapper>
        </div>
        <div>
          {isOpen && (
            <ul className="subtitle-wraper">
              {subtitles.map((item, index) => {
                return (
                  <li key={index}>
                    <MenuSubTitleWrapper>
                      <MenuSubTitle>{item}</MenuSubTitle>
                    </MenuSubTitleWrapper>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </li>
    </ul>
  )
}
