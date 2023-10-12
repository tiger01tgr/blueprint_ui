'use client'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import Link from 'next/link'
import styles from './RegisterForm.module.css'
import { SignInWithButton } from '../SignIns/SignInWithButton';
import { SocialIcon, Google } from '../SignIns/SocialIconConfig';
import useAuth from '@/hooks/auth/useAuth';
import Login from '@/app/login/page';
import { useRouter } from 'next/navigation';

const buttons: SocialIcon[] = [
    Google
]

type FormValues = {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    terms: boolean;
}

const RegisterForm = () => {
    const { getUser, LoginWithEmailPassword, RegisterWithEmailPassword } = useAuth()
    const router = useRouter()
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });
    const onSubmit = (values: FormValues) => {
        switch (type) {
            case 'login':
                console.log('login', values);
                break;

            case 'register':
                RegisterWithEmailPassword(values.email, values.password, values.firstname, values.lastname)
                .then((error) => {
                    if (error === null) {
                        router.push('/')
                    }
                })
                .catch((error) => {
                    console.log('error creating user')
                    console.log(error)
                })
                break;
        }
    };

    return (
        <Paper radius="md" p="xl" withBorder className={styles['paper']}>
            {/* <Text size="lg" fw={500}>
                Welcome to bluprint!
            </Text> */}

            <Group grow mb="md" mt="md">
                {buttons.map((social) => (
                    <SignInWithButton key={social.id} props={social} />
                ))}
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <form onSubmit={form.onSubmit(onSubmit)}>
            <Stack>
                {type === 'register' && (
                <Stack>
                <TextInput
                    required
                    label="First name"
                    placeholder="First name"
                    value={form.values.firstname}
                    onChange={(event) => form.setFieldValue('firstname', event.currentTarget.value)}
                    radius="md"
                />
                <TextInput
                    required
                    label="Last name"
                    placeholder="Last name"
                    value={form.values.lastname}
                    onChange={(event) => form.setFieldValue('lastname', event.currentTarget.value)}
                    radius="md"
                />
                </Stack>
                )}

                <TextInput
                    required
                    label="Email"
                    placeholder="hello@mantine.dev"
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    error={form.errors.email && 'Invalid email'}
                    radius="md"
                />

                <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password && 'Password should include at least 6 characters'}
                    radius="md"
                />

                {type === 'register' && (
                <Checkbox
                    label="I accept terms and conditions"
                    checked={form.values.terms}
                    onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                />
                )}
            </Stack>

            <Group justify="space-between" mt="xl">
                <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                {type === 'register'
                    ? 'Already have an account? Login'
                    : "Don't have an account? Register"}
                </Anchor>
                <button className={styles.registerButton} type="submit">
                    {upperFirst(type)}
                </button>
            </Group>
            </form>
        </Paper>
    )
}

export default RegisterForm