import {
  Anchor,
  Button,
  Center,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import { signIn } from "@/firebase/lib/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

function Create() {
  const small = useMediaQuery("(max-width: 1150px)");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user.toJSON());
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container size="md" mt={small ? 180 : 120} mb={100}>
      {!user ? (
        <Center style={{ flexDirection: "column" }}>
          <Title order={1}>Welcome back, Ben.</Title>
          <Text size="sm" color="dimmed">
            Not Ben? <Anchor href="/">Go back home.</Anchor>
          </Text>
          <Paper
            withBorder
            shadow="md"
            p={30}
            mt={30}
            radius="md"
            style={{ minWidth: "min(100%, 400px)" }}
          >
            <form onSubmit={form.onSubmit((values) => signIn(values))}>
              <TextInput {...form.getInputProps("email")} />
              <PasswordInput mt="md" {...form.getInputProps("password")} />
              <Button fullWidth mt="xl" type="submit">
                Sign in
              </Button>
            </form>
          </Paper>
        </Center>
      ) : (
        <Text>
          Signed in as <strong>{user?.email}</strong>
        </Text>
      )}
    </Container>
  );
}

export default Create;
