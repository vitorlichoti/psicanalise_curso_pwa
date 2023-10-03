import {Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList} from "@chakra-ui/menu";
import {Avatar, Circle, IconButton} from "@chakra-ui/react";
import {BiLogOut} from "react-icons/bi";
import {Flex, Text} from "@chakra-ui/layout";
import {useRouter} from "next/navigation";

interface profileProps {
    avatar: string
}

function ProfileMenu({avatar} : profileProps) {
    const router = useRouter()
    const handleLogout = () => {
        localStorage.clear()
        if (!localStorage.getItem('data') && !localStorage.getItem('token')) {
            router.push('/')
        }
    }
    return (
        <Menu>
            <MenuButton>
                <Avatar src={avatar} size="sm"/>
            </MenuButton>
            <MenuList bg='purple.500'>
                <MenuGroup title='Perfil'>
                    <MenuItem bg='purple.400' onClick={() => router.push('/perfil')}>Meu Perfil</MenuItem>
                    <MenuItem bg='purple.400' onClick={() => router.push('/editarPerfil')}>Editar perfil</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Ajuda'>
                    <MenuItem bg='purple.400'>Docs</MenuItem>
                    <MenuItem bg='purple.400'>FAQ</MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <MenuDivider />
                    <Flex justifyContent="center" alignItems="center" gap={4}>
                        <Text>Sair</Text>
                        <IconButton onClick={handleLogout} h="30px" aria-label="Sair" icon={BiLogOut()}/>
                    </Flex>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default ProfileMenu