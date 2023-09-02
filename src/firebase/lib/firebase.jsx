import { auth, db } from "@/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getPostContent(slug) {
  const postRef = doc(db, "posts", slug);
  return getDoc(postRef).then((doc) => {
    if (doc.exists()) {
      return doc.data();
    } else {
      throw new Error(`Post ${slug} not found`);
    }
  });
}

export async function getPostMetadata(slug) {
  const archiveRef = doc(db, "archive", slug);
  return getDoc(archiveRef).then((doc) => {
    if (doc.exists()) {
      return doc.data();
    } else {
      throw new Error(`Post ${slug} not found`);
    }
  });
}

export async function getAllPosts() {
  const archiveRef = collection(db, "archive");
  return getDocs(archiveRef).then((docs) => {
    return docs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  });
}

// Auth

export async function signIn({ email, password }) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
    console.error(e);
  }

  return { result, error };
}
