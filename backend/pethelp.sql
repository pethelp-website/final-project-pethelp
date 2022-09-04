--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pet_report; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pet_report (
    id integer NOT NULL,
    username character varying(30),
    sheltername character varying(30),
    race character varying(30),
    color character varying(30),
    image character varying(50),
    type character varying(15),
    phone character varying(15)
);


ALTER TABLE public.pet_report OWNER TO postgres;

--
-- Name: pet_report_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pet_report_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pet_report_id_seq OWNER TO postgres;

--
-- Name: pet_report_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pet_report_id_seq OWNED BY public.pet_report.id;


--
-- Name: shelter; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shelter (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    location character varying(120)
);


ALTER TABLE public.shelter OWNER TO postgres;

--
-- Name: shelter_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shelter_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shelter_id_seq OWNER TO postgres;

--
-- Name: shelter_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shelter_id_seq OWNED BY public.shelter.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    email character varying(120) NOT NULL,
    address character varying(120),
    city character varying(30) NOT NULL,
    postcode character varying(12),
    password character varying(250) NOT NULL,
    isadmin boolean DEFAULT false
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: usertype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usertype (
    id integer NOT NULL,
    user_id integer,
    type character varying(30) NOT NULL,
    display_type character varying(30) NOT NULL
);


ALTER TABLE public.usertype OWNER TO postgres;

--
-- Name: usertype_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usertype_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usertype_id_seq OWNER TO postgres;

--
-- Name: usertype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usertype_id_seq OWNED BY public.usertype.id;


--
-- Name: pet_report id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pet_report ALTER COLUMN id SET DEFAULT nextval('public.pet_report_id_seq'::regclass);


--
-- Name: shelter id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shelter ALTER COLUMN id SET DEFAULT nextval('public.shelter_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: usertype id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usertype ALTER COLUMN id SET DEFAULT nextval('public.usertype_id_seq'::regclass);


--
-- Data for Name: pet_report; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pet_report (id, username, sheltername, race, color, image, type, phone) FROM stdin;
71	alissa	Sabadell	No race	Black and white	1662285858854.jpg	Cat	\N
72	test	Valencia	No race	Gray	1662285902376.jpg	Cat	\N
73	Alissa	Barcelona 	Dont know	Yellow and black stripes	1662285958169.jpg	Cat	\N
74	test	Sabadell	Dont know	Caramel	1662285996189.jpg	Dog	\N
75	Alissa	Sabadell	St. Bernard	Black, white and orange	1662286069203.jpg	Dog	\N
77	test	Terrasa	Pit bull 	Caramel	1662286395245.jpg	Dog	\N
78	test	Sabadell	Pinsher	Black and caramel	1662286478186.jpg	Dog	\N
79	test	Barcelona	No race	Orange	1662286612244.jpg	Cat	\N
80	test	Barcelona	Persian	White	1662286810147.jpg	Cat	\N
81	test	Barcelona	No race	Black	1662286878313.jpg	Cat	\N
\.


--
-- Data for Name: shelter; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shelter (id, name, location) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, address, city, postcode, password, isadmin) FROM stdin;
1	usman	abc@gmail.com	corts catalanes	Barcelona	b089	pass1	f
2	Gloria	efg@gmail.com	calle valencia	Barcelona	b020	pass1	f
3	Gabi	hij@gmail.com	calle montaner	valencia	a89	pass1	f
4	isha	klm@gmail.com	calle rocafort	Barcelona	b020	pass1	f
5	alisa	xyz@gmail.com	calle taragona	girona	f30	pass1	f
9	test123	mahco11mo@gmail.com	\N	asasas	1845454	$2b$10$lnjQ5qyQ20yZ15N327TvLe8IyI52nArGHgl5mnEw8sVqevvZlou2e	f
10	testform	test@gmail.com	rua 5	Sabadell	08208	$2b$10$rZeWFCt78RiqbgtFf/wb4OoPZpb.1yknY5FjMXjS2p8nuMEhJGk5i	f
11	test12	mahco@gmail.com	\N	asasas	1845454	$2b$10$wCkXr0fUJbl0Q.GIVkdSoemmFdJqlEgpioX9a8g1xBgq/1a7LNuOG	f
12	testagain	mimi@gmail.com	rua gato	barcelona	08208	$2b$10$IxGjZ87IaWFr9BhQkcoVR..r3RIAb.JLAiL/9Y4.8rhHjAw844xRu	f
13	holaaaaa	holaa@gmail.com	calle aragon	barcelona	08208	$2b$10$T/G1qEFCh6gqBCR1ZdFdyuwAitWtQO8FNo.SzO9SM5xcMIFcZlI0G	f
14	alissatest	alissa@ggmail.com	calle 6	Madrid	08209	$2b$10$7PDMN0gyFqRwJsWhb81tk.3wucVqHOk.5Ss4TEtNSO6eUMH0JwCwO	f
15	alissa	alissanishihara@gmail.com	Placa 5	sabadell	08208	$2b$10$945k62LpqgWrUxWv8ssJOO1hDxALAK5AA4sRc4BECJ9QCryvmLyvi	f
16	jojo123	jojo@gmail.com	calle do gato	Sabadell	08208	$2b$10$PBfsGiq60930wUcdTMI6Y.kyNw3PyIj0N5E/4Fvmao9AS.zsk3pq.	f
17	mimi123	mimi123@gmail.com	calle 123	sabadell	08208	$2b$10$VwXkKsl3gGfn4Z7N.ZTed.W0Rs7fRsBC4YSu.fQ4dp/U7246Y.LxG	f
18	test123456	test123456@gmail.com	nulllll 1	sabadell	08208	$2b$10$rIP5AemAj.zHARwNXY6f4uHb1XIZa89NqzCcbslMh2kvert.lXAIy	f
19	alissa	alissa@gmail.com	Plaça Lluis Casassas, 4, 4, 2	Sabadell	08208	$2b$10$q6JpMtod7isPyJ4XUnyu5eSFdomK4Z0apDHIMppr/Rwo112VSopKa	f
20	Alissa Nishihara	ali@gmail.com	Plaça Lluis Casassas, 4, 4, 2	Sabadell	08208	$2b$10$CMM4HLBXH/H71yXrDYNeCux3QNgxtYQ.cz.wwryz/QLxN90yQ3y5a	f
\.


--
-- Data for Name: usertype; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usertype (id, user_id, type, display_type) FROM stdin;
\.


--
-- Name: pet_report_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pet_report_id_seq', 85, true);


--
-- Name: shelter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shelter_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 20, true);


--
-- Name: usertype_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usertype_id_seq', 1, false);


--
-- Name: pet_report pet_report_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pet_report
    ADD CONSTRAINT pet_report_pkey PRIMARY KEY (id);


--
-- Name: shelter shelter_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shelter
    ADD CONSTRAINT shelter_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: usertype usertype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usertype
    ADD CONSTRAINT usertype_pkey PRIMARY KEY (id);


--
-- Name: usertype usertype_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usertype
    ADD CONSTRAINT usertype_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: TABLE pet_report; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT ON TABLE public.pet_report TO PUBLIC;
GRANT SELECT,INSERT ON TABLE public.pet_report TO pethelp;


--
-- Name: TABLE shelter; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.shelter TO pethelp;


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.users TO pethelp;


--
-- Name: SEQUENCE users_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.users_id_seq TO pethelp;


--
-- Name: TABLE usertype; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.usertype TO pethelp;


--
-- PostgreSQL database dump complete
--