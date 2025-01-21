import ManagerTemplate from "@/components/managerTemplate" 
import MenuList from "../menuList" 
 
export const metadata = { 
   title: 'Menu | Ordering System', 
   description: 'Generated by create next app', 
} 
 
type PropsLayout = { 
   children: React.ReactNode 
} 
 
const RootLayout = ({ children }: PropsLayout) => { 
   return ( 
       <ManagerTemplate title="Menu" id="Meni" 
menuList={MenuList}> 
           {children} 
       </ManagerTemplate> 
   ) 
} 
 
export default RootLayout 