import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav({ show, setShowNav }) {
  const inactiveLink = "flex gap-1 p-1 link";
  const activeLink =
    inactiveLink + " bg-highlight text-black rounded-sm link-active";
  const inactiveIcon = "w-6 h-6";
  const activeIcon = inactiveIcon + "icon-active";
  const router = useRouter();
  const { pathname } = router;
  async function logout() {
    await router.push("/");
    await signOut();
  }
  const { data: session } = useSession();
  return (
    <aside
      className={
        (show ? "left-0" : "-left-full") +
        " top-0 text-gray-500 p-4 fixed w-full bg-bgGray h-full md:static md:w-auto transition-all"
      }
    >
      <button className="md:hidden" onClick={() => setShowNav(!show)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="py-5 text-center">
        <img src={session?.user?.image} className="mx-auto w-24 rounded-full" />
        <div className="about">{session?.user?.name}</div>
      </div>
      <nav className="nav">
        <div className="list">
          <div className="nav-caption">Основные</div>
          <Link
            href={"/"}
            className={pathname === "/" ? activeLink : inactiveLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={pathname === "/" ? activeIcon : inactiveIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Главная Панель
          </Link>

          <Link
            href={"/settings"}
            className={
              pathname.includes("/settings") ? activeLink : inactiveLink
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={
                pathname.includes("/settings") ? activeIcon : inactiveIcon
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Настройки
          </Link>
          <div className="nav-caption">Изменение содержимого</div>
          <Link
            href={"/welcome"}
            className={
              pathname.includes("/welcome") ? activeLink : inactiveLink
            }
          >
            Cтраница приветствия
          </Link>
          <Link
            href={"/objects"}
            className={
              pathname.includes("/objects") ? activeLink : inactiveLink
            }
          >
            Успешно реализованных объектов
          </Link>
          <Link
            href={"/projects"}
            className={
              pathname.includes("/projects") ? activeLink : inactiveLink
            }
          >
            Последние проекты
          </Link>
          <Link
            href={"/services"}
            className={
              pathname.includes("/services") ? activeLink : inactiveLink
            }
          >
            Найти услуги
          </Link>
          <Link
            href={"/stages"}
            className={
              pathname.includes("/stages") ? activeLink : inactiveLink
            }
          >
            Этапы работы
          </Link>
          <Link
            href={"/partners"}
            className={
              pathname.includes("/partners") ? activeLink : inactiveLink
            }
          >
            Партнеры
          </Link>
          <Link
            href={"/faq"}
            className={
              pathname.includes("/faq") ? activeLink : inactiveLink
            }
          >
            Часто задаваемые вопросы
          </Link>
          <Link
            href={"/price"}
            className={
              pathname.includes("/price") ? activeLink : inactiveLink
            }
          >
            Раздел цены
          </Link>
          {/* <Link
            href={"/portfolio"}
            className={
              pathname.includes("/portfolio") ? activeLink : inactiveLink
            }
          >
            Раздел портфолио
          </Link> */}
          <Link
            href={"/footer"}
            className={
              pathname.includes("/footer") ? activeLink : inactiveLink
            }
          >
            Футер
          </Link>
          <hr />
          <button onClick={logout} className={inactiveLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Выйти
          </button>
        </div>
      </nav>
      <div className="nav-sell">
        <Link href="https://diasqazaqbro.vercel.app/" target="_blank">
          Made with in diasqazaqbro
        </Link>
      </div>
    </aside>
  );
}
