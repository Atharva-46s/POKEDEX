import * as C from "./styles";
import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";
import { ReactComponent as TelegramLogo } from "../../assets/logo-telegram.svg";

export const SocialMedia = () => {
  return (
    <C.Container>
      <li>
        <C.Link href="https://www.linkedin.com/in/atharva-kandekar-2aa70625b/">
          <LinkedinLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href="https://github.com/Atharva-46s">
          <GithubLogo />
        </C.Link>
      </li>
      <li>
        <C.Link href="https://t.me/Atharva_Kandekar">
          <TelegramLogo />
        </C.Link>
      </li>
    </C.Container>
  );
};
