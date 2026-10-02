import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, FileText, Wrench, Phone, ChevronDown, 
  Download, BookOpen, Flame, Snowflake, Waves, 
  Zap, Info, Menu, X, MessageCircle, Send, Bot,
  User, Plus, List, Clock, CheckCircle, Camera, Loader2, Sparkles,
  LayoutDashboard, Package, Calendar, ShieldCheck, AlertTriangle
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, onSnapshot, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Ali Group Corporate Color
const BRAND_COLOR = "#3478B4"; 

// Safe fallback for Firebase configuration
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {
  apiKey: "AIzaSyDummyKeyForBuild-ReplaceIfNeeded",
  authDomain: "aligroup-support.firebaseapp.com",
  projectId: "aligroup-support",
  storageBucket: "aligroup-support.appspot.com",
  messagingSenderId: "00000000000",
  appId: "1:000000:web:00000"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'aligroup-production-app';
