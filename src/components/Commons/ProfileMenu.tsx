import {Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList} from "@chakra-ui/menu";
import {Circle, IconButton} from "@chakra-ui/react";
import {BiLogOut} from "react-icons/bi";
import {Flex, Text} from "@chakra-ui/layout";

function ProfileMenu() {
    return (
        <Menu>
            <MenuButton>
                <Circle size="40px" bg="purple.500">P</Circle>
            </MenuButton>
            <MenuList bg='purple.500'>
                <MenuGroup title='Perfil'>
                    <MenuItem bg='purple.400'>Meu Perfil</MenuItem>
                    <MenuItem bg='purple.400'>Editar perfil</MenuItem>
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
                        <IconButton h="30px" aria-label="Sair" icon={BiLogOut()}/>
                    </Flex>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default ProfileMenu