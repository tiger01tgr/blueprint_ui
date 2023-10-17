'use client'
import React, { useCallback } from 'react'
import { Menu, Button, rem } from '@mantine/core';
import { MdMenu } from 'react-icons/md'
import classes from './NavMenu.module.css'
import Link from 'next/link';

interface NavMenuProps {
    buttonData: any;
}

const NavMenu = ({ buttonData }: NavMenuProps) => {

    const renderNavMenu = useCallback(() => (
        <Menu shadow="md" width={250}
            classNames={{
                dropdown: classes.dropdown,
                divider: classes.divider,
                item: classes.item,
            }}
        >
            <Menu.Target>
                <Button
                    variant="filled"
                    classNames={{
                        root: classes.buttonRoot,
                    }}
                >
                    <MdMenu size={35} />
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>
                    <Link href='/practice'>
                        Practice
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/jobs'>
                        Jobs Board
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item>
                    <Link href={`${buttonData.link}`} className={classes.buttonLiner}>
                        <div className={classes.button}>
                            {buttonData.name}
                        </div>
                    </Link>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    ), [buttonData])

    return (
        <div>
            {renderNavMenu()}
        </div>
    )
}

export default NavMenu