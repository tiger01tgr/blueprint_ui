'use client'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Paper,
    Group,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
import styles from './RegisterForm.module.css'
import { SignInWithButton } from '../SignIns/SignInWithButton';
import useAuth from '@/hooks/auth/useAuth';
import { useRouter } from 'next/navigation';
import { Alert } from '@mantine/core';
import { useState } from 'react';

type FormValues = {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    terms: boolean;
}

interface Props {
    redirectToProfile: boolean
}

const RegisterForm = ({ redirectToProfile }: Props) => {
    const { LoginWithEmailPassword, RegisterWithEmailPassword } = useAuth()
    const router = useRouter()
    const [type, toggle] = useToggle(['register', 'login'])
    const [loginFailed, setLoginFailed] = useState(false)

    const handleCloseAlert = () => {
        setLoginFailed(false)
    }

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
            terms: (val) => (!val ? 'You must agree to the terms and conditions' : null),
        },
    });

    const onSubmit = (values: FormValues) => {
        switch (type) {
            case 'login':
                LoginWithEmailPassword(values.email, values.password)
                    .then((error) => {
                        if (error === null && redirectToProfile) {
                            router.push('/profile')
                        }
                    })
                    .catch((error) => {
                        console.log('error logging in')
                        console.log(error)
                    })
                break;

            case 'register':
                RegisterWithEmailPassword(values.email, values.password, values.firstname, values.lastname)
                    .then((error) => {
                        console.log(error)
                        if (error === null && redirectToProfile) {
                            router.push('/profile')
                        }
                    })
                    .catch((error) => {
                        console.log('failed')
                        setLoginFailed(true)
                    })
                break
        }
    }


    return (
        <Paper radius="md" p="xl" withBorder className={styles['paper']}>
            {loginFailed ?
                <Alert title="Login Failed" color="red" withCloseButton onClose={handleCloseAlert}>
                    Please try logging in again.
                </Alert> :
                <div />
            }
            {/* <Text size="lg" fw={500}>
                Welcome to bluprint!
            </Text> */}

            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit(form.values)
            }}>
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
                        placeholder="Email"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Invalid email'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />

                    {type === 'register' && (
                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            required={true}
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

            <Divider label="Or continue with" labelPosition="center" my="lg" />
            <SignInWithButton redirectToProfile={redirectToProfile} />
   
        </Paper>
    )
}

export default RegisterForm