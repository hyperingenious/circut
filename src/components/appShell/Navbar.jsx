import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const links = [
    {
        link: '#1',
        subParent: 'minor',
        label: 'Minor',
        links: [
            { link: '/cricut-bundle', label: 'Cricut Bundle' },
            { link: '/cricut-sticker-paper', label: 'Cricut Sticker Paper' },
            { link: '/cricut-crafting', label: 'Cricut Crafting' },
            { link: '/cricut-supplies', label: 'Cricut Supplies' },
            { link: '/cricut-smart-materials', label: 'Cricut Smart Materials' },
            { link: '/cricut-smart-accessories', label: 'Cricut Smart Accessories' },
        ],
    },
    {
        link: '#2',
        subParent: 'machine',
        label: 'Machine',
        links: [
            { link: '/cricut-machine', label: 'Cricut Machine' },
            { link: '/cricut-cutting-machine', label: 'Cricut Cutting Machine' },
            { link: '/cricut-cutter', label: 'Cricut Cutter' },
            { link: '/cricut-blades', label: 'Cricut Blades' },
        ],
    },
    {
        link: '#3',
        label: 'Design Space',
        subParent: 'design-space',

        links: [
            { link: '/cricut-design-space', label: 'Cricut Design Space' },
            { link: '/cricut-design-space-login', label: 'Cricut Design Space Login' },
            { link: '/cricut-design-space-download', label: 'Cricut Design Space Download' },
        ],
    },
    {
        link: '#4',
        label: 'Press',
        subParent: 'press',

        links: [
            { link: '/cricut-easy-press', label: 'Cricut Easy Press' },
            { link: '/cricut-heat-guide', label: 'Cricut Heat Guide' },
            { link: '/cricut-heat-press-guide', label: 'Cricut Heat Press Guide' },
            { link: '/cricut-heat-press', label: 'Cricut Heat Press' },
            { link: '/cricut-mug-press', label: 'Cricut Mug Press' },
        ],
    },
    {
        link: '#5',
        label: 'Explore',
        subParent: 'explore',

        links: [
            { link: '/cricut-explore-air-2', label: 'Explore' },
        ],
    },
    {
        link: '#6',
        subParent: 'joy',

        label: 'Joy',
        links: [
            { link: '/cricut-joy', label: 'Cricut Joy' },
            { link: '/cricut-vinyl', label: 'Cricut Vinyl' },
            { link: '/cricut-joy-vinyl', label: 'Cricut Joy Vinyl' },
        ],
    },
    {
        link: '#7',
        subParent: 'maker',

        label: 'Maker',
        links: [
            { link: '/cricut-maker-3', label: 'Cricut Maker 3' },
            { link: '/cricut-maker', label: 'Cricut Maker' },
        ],
    },
    {
        link: '#8',
        subParent: 'legal',

        label: 'Legal',
        links: [
            { link: '/terms-of-use', label: 'Terms of Use' },
            { link: '/privacy-policy', label: 'Privacy Policy' },
            { link: '/regional-specific-privacy-notices', label: 'Regional Specific' },
            { link: '/angel-policy', label: 'Angel Policy' },
            { link: '/online-policies', label: 'Online Policies' },
            { link: '/cricut-access-policy', label: 'Cricut Access Policy' },
            { link: '/patents', label: 'Patents' },
            { link: '/claims-of-infringement', label: 'Claims of Infringement' },
            { link: '/submission-agreement', label: 'Submission Agreement' },
            { link: '/terms-nd-conditions', label: 'Terms & Conditions' },
            { link: '/eula', label: 'EULA' },
            { link: '/accessibility', label: 'Accessibility' },
        ],
    },
];


export default function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);


    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Link style={{ textDecoration: 'none' }} key={item.link} to={`${link.subParent}${item.link}`}>
                <Menu.Item >{item.label}</Menu.Item>
            </Link>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <h1>Cricut</h1>
                    <Group gap={5} visibleFrom="sm" wrap='nowrap'>
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header>
    );
}