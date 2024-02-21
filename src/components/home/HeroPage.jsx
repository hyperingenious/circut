import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroPage.module.css';

export function HeroPage() {
    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.6} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Circuit Breakthroughs: &nbsp;
                    <Text component="span" inherit className={classes.highlight}>
                         Unve Powering Tomorrow's Technology</Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        Explore the future with our groundbreaking circuits, redefining technology's core. Unleash innovation and connectivity like never before.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} variant="white" size="lg">
                        Get started
                    </Button>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                        Live demo
                    </Button>
                </div>
            </div>
        </div>
    );
}