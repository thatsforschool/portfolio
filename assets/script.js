const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const casesSec = document.createElement("section");
const contactSec = document.createElement("section");
const CVSec = document.createElement("section");
const ReadCVSec = document.createElement("section");

loadPage = (e) => {
  // header
  header.classList.add("flex");
  //   nav logo
  const logoLink = document.createElement("a");
  logoLink.id = "logoLink";
  logoLink.href = `#`;
  logoLink.classList.add("navLink");
  //   header.appendChild(logoLink);

  const logo = document.createElement("img");
  logo.id = "logo";
  logo.src = "./assets/images/logo.svg";
  logo.alt = "logo";
  //   aboutLink.classList.add("navLink");
  header.appendChild(logo);
  //   logoLink.appendChild(logo);

  // nav
  const nav = document.createElement("nav");
  nav.id = "nav";
  nav.classList.add("flex");
  header.appendChild(nav);

  // nav links
  const workLink = document.createElement("a");
  workLink.id = "workLink";
  workLink.classList.add("navLink");
  workLink.innerText = "Work";
  nav.appendChild(workLink);

  workLink.addEventListener("click", (e) => {
    casesSec.scrollIntoView();
  });

  const contactLink = document.createElement("a");
  contactLink.id = "contactLink";
  contactLink.classList.add("navLink");
  contactLink.innerText = "Contact";
  nav.appendChild(contactLink);

  contactLink.addEventListener("click", (e) => {
    contactSec.scrollIntoView();
  });

  const aboutLink = document.createElement("a");
  aboutLink.id = "CVLink";
  aboutLink.classList.add("navLink");
  aboutLink.innerText = "CV";
  nav.appendChild(aboutLink);

  aboutLink.addEventListener("click", () => {
    createCV();
  });

  //   Main
  const mainSection = document.createElement("section");
  mainSection.id = "mainSection";
  mainSection.classList.add("flex");
  main.appendChild(mainSection);

  const intro = document.createElement("div");
  intro.id = "intro";
  intro.classList.add("flexColumn");
  mainSection.appendChild(intro);

  const introTXTstring1 = document.createElement("div");
  introTXTstring1.id = "introStr1";
  introTXTstring1.classList.add("introlink");
  intro.appendChild(introTXTstring1);

  const introTXTstring2 = document.createElement("div");
  introTXTstring2.id = "introStr2";
  introTXTstring2.classList.add("introlink");
  intro.appendChild(introTXTstring2);

  typeTxt = () => {
    const nameTXT = `Hello! my name is Zuzanna.`;
    const introTXT = `I'm a multimedia design student with great passion for frontend and I strive every day to become better at what I love to do.
    `;

    const nameAry = nameTXT.split(" ");
    const introAry = introTXT.split(" ");

    let i = 0;
    let y = 0;

    if (i < nameAry.length) {
      typeWord = () => {
        const word = document.createElement("p");
        word.innerText += nameAry[i];
        word.classList.add("typedWord");
        introTXTstring1.appendChild(word);
        i++;

        if (i < nameAry.length) {
        } else {
          console.log(`you're done`);
          clearInterval(typeInter);
          if (y < introAry.length) {
            wordIntro = () => {
              const word = document.createElement("p");
              word.innerText += introAry[y];
              word.classList.add("typedWord");
              introTXTstring2.appendChild(word);
              y++;
              if (y == introAry.length) {
                console.log(`you're done`);
                clearInterval(InterIntro);
              }
            };
            const InterIntro = setInterval(wordIntro, 200);
          }
        }
      };
      const typeInter = setInterval(typeWord, 200);
    }
  };
  typeTxt();

  const arrows = document.createElement("div");
  arrows.classList.add("flex");
  main.appendChild(arrows);

  const arrowUp = document.createElement("div");
  arrowUp.classList.add("arrowUp");
  arrowUp.classList.add("arrowNav");
  arrowUp.innerText = "Home";
  arrows.appendChild(arrowUp);

  arrowUp.addEventListener("click", (e) => {
    nav.scrollIntoView();
  });
  const arrowDown = document.createElement("div");
  arrowDown.classList.add("arrowDown");
  arrowDown.classList.add("arrowNav");
  arrowDown.innerText = "Contact";
  arrows.appendChild(arrowDown);

  arrowDown.addEventListener("click", (e) => {
    contactSec.scrollIntoView();
  });

  const introImg = document.createElement("img");
  introImg.id = "introImg";
  introImg.src = "./assets/images/backgroundnoback.png";
  mainSection.appendChild(introImg);

  const catImgDiv = document.createElement("div");
  catImgDiv.id = "catImgDiv";
  main.appendChild(catImgDiv);

  const catImgTXT = document.createElement("p");
  catImgTXT.id = "catImgTXT";
  catImgTXT.innerText = "top";
  catImgDiv.appendChild(catImgTXT);

  const catImg = document.createElement("img");
  catImg.id = "catImg";
  catImg.src = "./assets/images/cat.png";
  catImgDiv.appendChild(catImg);

  catImgDiv.addEventListener("click", () => {
    nav.scrollIntoView();
  });

  //   footer

  footer.classList.add("flex");

  const linkEd = document.createElement("a");
  linkEd.id = "linkEd";
  linkEd.href = "https://www.linkedin.com/in/zuzanna-zyla-209305253/";
  footer.appendChild(linkEd);

  const copyRight = document.createElement("p");
  copyRight.id = "copyRight";
  copyRight.innerText = "2022 by Zuzanna Zyla";
  footer.appendChild(copyRight);
};

createWorkPage = (e) => {
  casesSec.classList.add("casesSec");
  main.appendChild(casesSec);

  const casesSecTitle = document.createElement("h2");
  casesSecTitle.classList.add("casesSecTitle");
  casesSecTitle.classList.add("mainSecTitle");
  casesSecTitle.innerText = "Work";
  casesSec.appendChild(casesSecTitle);

  cases.forEach((elm) => {
    const caseDiv = document.createElement("article");
    caseDiv.classList.add("caseDiv");
    caseDiv.classList.add("flex");
    casesSec.appendChild(caseDiv);

    const caseDivtxt = document.createElement("article");
    caseDivtxt.classList.add("caseDivtxt");
    caseDiv.appendChild(caseDivtxt);

    const caseHeadline = document.createElement("h2");
    caseHeadline.classList.add("caseHeadline");
    caseHeadline.innerText = elm.Title;
    caseDivtxt.appendChild(caseHeadline);

    const caseDivSum = document.createElement("article");
    caseDivSum.classList.add("caseDivSum");
    caseDivtxt.appendChild(caseDivSum);
    // role
    const role = document.createElement("div");
    role.classList.add("caseContentDiv");
    role.classList.add("flex-around");
    caseDivSum.appendChild(role);

    const roleLabel = document.createElement("p");
    roleLabel.classList.add("caseLabel");
    roleLabel.innerText = "My role:";
    role.appendChild(roleLabel);

    const roleContent = document.createElement("p");
    roleContent.classList.add("caseContent");
    roleContent.innerText = elm.myRole;
    role.appendChild(roleContent);

    // summary
    const summary = document.createElement("div");
    summary.classList.add("caseContentDiv");
    summary.classList.add("flex-around");
    caseDivSum.appendChild(summary);

    const summaryLabel = document.createElement("p");
    summaryLabel.classList.add("caseLabel");
    summaryLabel.innerText = "Summary:";
    summary.appendChild(summaryLabel);

    const summaryContent = document.createElement("p");
    summaryContent.classList.add("caseContent");
    summaryContent.innerText = elm.Summary;
    summary.appendChild(summaryContent);

    // solution
    const solution = document.createElement("div");
    solution.classList.add("caseContentDiv");
    solution.classList.add("flex-around");
    caseDivSum.appendChild(solution);

    const solutionLabel = document.createElement("p");
    solutionLabel.classList.add("caseLabel");
    solutionLabel.innerText = "Solution:";
    solution.appendChild(solutionLabel);

    const solutionContent = document.createElement("p");
    solutionContent.classList.add("caseContent");
    solutionContent.innerText = elm.Solution;
    solution.appendChild(solutionContent);

    // git
    const gitHub = document.createElement("div");
    gitHub.classList.add("caseContentDiv");
    gitHub.classList.add("flex-around");
    caseDivSum.appendChild(gitHub);

    const gitHubLabel = document.createElement("p");
    gitHubLabel.classList.add("caseLabel");
    gitHubLabel.innerText = "GitHub repository:";
    gitHub.appendChild(gitHubLabel);

    const gitHubContent = document.createElement("div");
    gitHubContent.classList.add("caseContent");
    gitHubContent.classList.add("flexColumn");
    gitHub.appendChild(gitHubContent);

    let i = 1;

    const RepArr = elm.gitHubRep;
    RepArr.forEach((rep) => {
      const gitHubContentA = document.createElement("a");
      gitHubContentA.classList.add("caseContentA");
      gitHubContentA.innerHTML = elm.Title + " " + i;
      gitHubContentA.href = rep;
      gitHubContent.appendChild(gitHubContentA);
      i++;
    });

    // paragraphs
    const paragraphsDiv = document.createElement("div");
    paragraphsDiv.classList.add("caseParagraphDiv");
    caseDivtxt.appendChild(paragraphsDiv);

    const BtnAll = document.createElement("button");
    BtnAll.classList.add("BtnAll");
    BtnAll.innerText = "Read All";
    BtnAll.dataset.case = elm.case;
    paragraphsDiv.appendChild(BtnAll);
    const TXTdiv = document.createElement("section");

    const BtnAllClose = document.createElement("button");
    BtnAllClose.classList.add("BtnAll");
    BtnAllClose.classList.add("openBtnAll");
    BtnAllClose.classList.add("none");
    BtnAllClose.innerText = "Close";
    BtnAllClose.dataset.case = elm.case;
    paragraphsDiv.appendChild(BtnAllClose);

    const BtnGoSum = document.createElement("button");
    BtnGoSum.classList.add("BtnGoSum");
    BtnGoSum.classList.add("openBtnAll");
    BtnGoSum.classList.add("none");
    BtnGoSum.innerText = "Summary";

    BtnGoSum.addEventListener("click", (e) => {
      e.preventDefault();
      caseDivSum.classList.remove("none");
      BtnAllClose.classList.add("none");
      BtnGoSum.classList.add("none");
      TXTdiv.innerHTML = "";
    });

    BtnAllClose.addEventListener("click", (e) => {
      e.preventDefault();
      BtnAll.classList.remove("none");
      BtnAllClose.classList.add("none");
      TXTdiv.innerHTML = "";
      caseDivSum.classList.remove("none");
    });

    BtnAll.addEventListener("click", (e) => {
      e.preventDefault();
      caseDivSum.classList.add("none");
      BtnGoSum.classList.add("none");

      BtnAll.classList.add("none");
      BtnAllClose.classList.remove("none");

      TXTdiv.innerHTML = "";
      console.log(BtnAll.dataset.case);
      const caseOnElm = BtnAll.dataset.case;
      const arrKeys = Object.keys(casesTXT);

      if (arrKeys.find((key) => key == caseOnElm)) {
        loadEntireTXT = () => {
          TXTdiv.classList.add("TXTdiv");
          caseDivtxt.appendChild(TXTdiv);
          for (const [key, value] of Object.entries(casesTXT)) {
            console.log(Object.keys(value));
            console.log(Object.entries(value));
            console.log(Object.entries(value)[1][1]);
            const takeAway = Object.entries(value)[1][1];

            console.log(Object.entries(value)[0][1]);
            const textObj = Object.entries(value)[0][1];
            console.log(Object.entries(textObj));
            const textArrs = Object.entries(textObj);
            textArrs.forEach((arr) => {
              const sect = arr[0];
              const sectCont = arr[1];
              console.log(sect);
              console.log(sectCont);
              console.log(sectCont.sectTitle);
              const sectTitle = sectCont.sectTitle;
              console.log(sectCont.Intro);
              const sectIntro = sectCont.Intro;
              console.log(sectCont.Sections);
              const sectArrObj = sectCont.Sections;
              console.log(Object.entries(sectArrObj));
              const sectArrs = Object.entries(sectArrObj);

              const secHeadline = document.createElement("h2");
              secHeadline.classList.add("secHeadline");
              secHeadline.innerText = sectTitle;
              TXTdiv.appendChild(secHeadline);

              const secIntro = document.createElement("p");
              secIntro.classList.add("secIntro");
              secIntro.innerText = sectIntro;
              TXTdiv.appendChild(secIntro);

              sectArrs.forEach((arr) => {
                console.log(arr);
                const arrText = arr[1];
                console.log(arrText);
                const arrHeadline = arrText.headline;
                console.log(arrHeadline);
                const arrContent = arrText.text;
                console.log(arrContent);

                const subHadline = document.createElement("h3");
                subHadline.classList.add("subHadline");
                subHadline.innerText = arrHeadline;
                TXTdiv.appendChild(subHadline);

                const parCont = document.createElement("p");
                parCont.classList.add("parCont");
                parCont.innerText = arrContent;
                TXTdiv.appendChild(parCont);
              });
            });
            const takeAwayHeadline = document.createElement("h2");
            takeAwayHeadline.classList.add("secHeadline");
            takeAwayHeadline.innerText = "Take away";
            TXTdiv.appendChild(takeAwayHeadline);

            const takeAwayCont = document.createElement("p");
            takeAwayCont.classList.add("parCont");
            takeAwayCont.innerText = takeAway;
            TXTdiv.appendChild(takeAwayCont);
          }
        };
        loadEntireTXT();
      } else {
        console.log(`no match`);
      }
    });

    elm.paragraphs.forEach((paragraph) => {
      const linkPar = document.createElement("a");
      linkPar.classList.add("linkPar");
      linkPar.href = `#`;
      linkPar.dataset.case = elm.case;
      linkPar.dataset.id = paragraph.paragraphId;
      linkPar.innerText = paragraph.paragraphHeadline;
      paragraphsDiv.appendChild(linkPar);

      linkPar.addEventListener("click", (e) => {
        e.preventDefault();
        caseDivSum.classList.add("none");
        BtnGoSum.classList.remove("none");
        BtnAll.classList.remove("none");
        BtnAllClose.classList.add("none");

        TXTdiv.innerHTML = "";
        const caseOnElm = linkPar.dataset.case;
        console.log(caseOnElm);
        const parOnElm = linkPar.dataset.id;
        console.log(parOnElm);
        const arrKeys = Object.keys(casesTXT);
        console.log(arrKeys);

        if (arrKeys.find((key) => key == caseOnElm)) {
          loadParTXT = () => {
            TXTdiv.classList.add("TXTdiv");
            caseDivtxt.appendChild(TXTdiv);
            for (const [key, value] of Object.entries(casesTXT)) {
              console.log(Object.keys(value));
              console.log(Object.entries(value));
              console.log(Object.entries(value)[1][1]);
              const takeAway = Object.entries(value)[1][1];

              console.log(Object.entries(value)[0][1]);
              const textObj = Object.entries(value)[0][1];
              console.log(Object.entries(textObj));
              console.log(Object.entries(value)[1][1].ID);
              console.log(elm.case);
              // && elm.case == Object.entries(value)[1][1].ID

              if (
                parOnElm == "takeaway" &&
                elm.case == Object.entries(value)[1][1].ID
              ) {
                console.log(Object.entries(value)[1][1]);
                const takeAwayHeadline = document.createElement("h2");
                takeAwayHeadline.classList.add("secHeadline");
                takeAwayHeadline.innerText = "Take away";
                TXTdiv.appendChild(takeAwayHeadline);

                const takeAwayCont = document.createElement("p");
                takeAwayCont.classList.add("parCont");
                takeAwayCont.innerText = takeAway.TXT;
                TXTdiv.appendChild(takeAwayCont);
              } else {
                Object.entries(textObj).forEach((par) => {
                  console.log(par);

                  if (par[0] == parOnElm) {
                    const sect = par[0];
                    const sectCont = par[1];
                    console.log(sect);
                    console.log(sectCont);
                    console.log(sectCont.sectTitle);
                    const sectTitle = sectCont.sectTitle;
                    console.log(sectCont.Intro);
                    const sectIntro = sectCont.Intro;
                    console.log(sectCont.Sections);
                    const sectArrObj = sectCont.Sections;
                    console.log(Object.entries(sectArrObj));
                    const sectArrs = Object.entries(sectArrObj);

                    const secHeadline = document.createElement("h2");
                    secHeadline.classList.add("secHeadline");
                    secHeadline.innerText = sectTitle;
                    TXTdiv.appendChild(secHeadline);

                    const secIntro = document.createElement("p");
                    secIntro.classList.add("secIntro");
                    secIntro.innerText = sectIntro;
                    TXTdiv.appendChild(secIntro);

                    sectArrs.forEach((arr) => {
                      console.log(arr);
                      const arrText = arr[1];
                      console.log(arrText);
                      const arrHeadline = arrText.headline;
                      console.log(arrHeadline);
                      const arrContent = arrText.text;
                      console.log(arrContent);

                      const subHadline = document.createElement("h3");
                      subHadline.classList.add("subHadline");
                      subHadline.innerText = arrHeadline;
                      TXTdiv.appendChild(subHadline);

                      const parCont = document.createElement("p");
                      parCont.classList.add("parCont");
                      parCont.innerText = arrContent;
                      TXTdiv.appendChild(parCont);
                    });
                  } else {
                    console.log("no match");
                  }
                });
              }
            }
          };
          loadParTXT();
        } else {
          console.log(`no match`);
        }
        caseDivtxt.appendChild(BtnGoSum);
      });
    });

    // images
    const image = document.createElement("img");
    image.classList.add("imageCase");
    image.src = elm.SummaryImg;
    caseDiv.appendChild(image);

    const caseBreak = document.createElement("div");
    caseBreak.classList.add("caseBreak");
    caseBreak.classList.add("flex");
    casesSec.appendChild(caseBreak);

    const caseBreakLeft = document.createElement("div");
    caseBreakLeft.classList.add("caseBreakLeft");
    caseBreak.appendChild(caseBreakLeft);

    const caseBreakRight = document.createElement("div");
    caseBreakRight.classList.add("caseBreakRight");
    caseBreak.appendChild(caseBreakRight);
  });

  const arrows = document.createElement("div");
  arrows.classList.add("flex");
  main.appendChild(arrows);

  const arrowUp = document.createElement("div");
  arrowUp.classList.add("arrowUp");
  arrowUp.classList.add("arrowNav");
  arrowUp.innerText = "Work";
  arrows.appendChild(arrowUp);

  arrowUp.addEventListener("click", (e) => {
    casesSec.scrollIntoView();
  });

  const arrowDown = document.createElement("div");
  arrowDown.classList.add("arrowDown");
  arrowDown.classList.add("arrowNav");
  arrowDown.innerText = "CV";
  arrows.appendChild(arrowDown);

  arrowDown.addEventListener("click", (e) => {
    createCV();
  });
};

createContact = (e) => {
  contactSec.classList.add("contactSec");
  contactSec.classList.add("flex");
  main.appendChild(contactSec);

  const contactTXT = document.createElement("article");
  contactTXT.classList.add("artConTXT");
  contactTXT.classList.add("artConTXTleft");
  contactSec.appendChild(contactTXT);

  const contactSecTitle = document.createElement("h2");
  contactSecTitle.classList.add("contactSecTitle");
  contactSecTitle.classList.add("mainSecTitle");
  contactSecTitle.innerText = "Contact";
  contactTXT.appendChild(contactSecTitle);

  const contactTXT2par = document.createElement("p");
  contactTXT2par.classList.add("contactTXTpar");
  contactTXT2par.classList.add("contactTXT2par");
  contactTXT2par.innerText =
    "I'm currently looking for an internship as a frontend developer. " +
    "Are you interested? I would love to hear from you.";
  contactTXT.appendChild(contactTXT2par);

  const contactTXTimg = document.createElement("img");
  contactTXTimg.id = "contactTXTimg";
  contactTXTimg.src = "./assets/images/image-me-withfloor.png";
  contactTXT.appendChild(contactTXTimg);

  const contactLinks = document.createElement("article");
  contactLinks.classList.add("artConTXT");
  contactLinks.classList.add("artConTXTright");
  contactLinks.classList.add("flexColumn");
  contactSec.appendChild(contactLinks);

  const contactTXT1par = document.createElement("h2");
  contactTXT1par.classList.add("contactTXTpar");
  contactTXT1par.classList.add("contactTXT1par");
  contactTXT1par.innerText = "You can get a hold of me at:";
  contactLinks.appendChild(contactTXT1par);

  const contactForm = document.createElement("iframe");
  contactForm.id = "contactForm";
  contactForm.src =
    "https://docs.google.com/forms/d/e/1FAIpQLSdUdc43JJ1a0g3IwnNN3bgeCdQQXIGnuqUg1LWoaomCVug92g/viewform?embedded=true";
  contactForm.classList.add("socialLinks");
  contactLinks.appendChild(contactForm);

  const linkedLink = document.createElement("a");
  linkedLink.id = "linkedLink";
  linkedLink.href = "https://www.linkedin.com/in/zuzanna-zyla-209305253/";
  linkedLink.innerText = "my LinkedIn profile";
  linkedLink.classList.add("socialLinks");
  contactLinks.appendChild(linkedLink);

  const githubLink = document.createElement("a");
  githubLink.id = "githubLink";
  githubLink.href = "https://github.com/thatsforschool";
  githubLink.innerText = "my GitHub profile";
  githubLink.classList.add("socialLinks");
  contactLinks.appendChild(githubLink);

  CVSec.id = "CVSec";
  contactTXT.appendChild(CVSec);

  const CVSecTitle = document.createElement("h2");
  CVSecTitle.classList.add("CVSecTitle");
  CVSecTitle.innerText = "CV";
  CVSec.appendChild(CVSecTitle);

  const CVbtns = document.createElement("div");
  CVbtns.id = "CVbtns";
  CVbtns.classList.add("flex");
  CVSec.appendChild(CVbtns);

  const CVdownBtn = document.createElement("a");
  CVdownBtn.href = "./assets/txt/CV_Zuzanna_Zyla.pdf";
  CVdownBtn.classList.add("CVbtns");
  CVdownBtn.id = "CVdownBtn";
  CVdownBtn.innerText = "Download CV";
  CVdownBtn.download = "CV_Zuzanna_Zyla.pdf";
  CVdownBtn.target = "_blank";
  CVbtns.appendChild(CVdownBtn);

  const CVreadBtn = document.createElement("a");
  CVreadBtn.classList.add("CVbtns");
  CVreadBtn.id = "CVreadBtn";
  CVreadBtn.innerText = "Read CV";
  CVbtns.appendChild(CVreadBtn);

  CVreadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createCV();
  });

  const notebookImg = document.createElement("img");
  notebookImg.src = "./assets/images/notebook.png";
  notebookImg.id = "notebookImg";
  CVbtns.appendChild(notebookImg);
};

createCV = (e) => {
  ReadCVSec.innerHTML = "";
  ReadCVSec.id = "ReadCVSec";
  main.appendChild(ReadCVSec);

  const CVSecTitle = document.createElement("h2");
  CVSecTitle.classList.add("CVSecTitle");
  CVSecTitle.classList.add("mainSecTitle");
  CVSecTitle.innerText = "CV";
  ReadCVSec.appendChild(CVSecTitle);

  const CVSecTXT = document.createElement("article");
  CVSecTXT.classList.add("CVSecTXT");
  CVSecTXT.classList.add("flex");
  ReadCVSec.appendChild(CVSecTXT);

  const CVreadFile = document.createElement("iframe");
  CVreadFile.id = "CVreadFile";
  CVreadFile.src = "./assets/txt/CV_Zuzanna_Zyla.pdf";
  CVSecTXT.appendChild(CVreadFile);

  CVreadFile.scrollIntoView();

  const CVreadBTNS = document.createElement("div");
  CVreadBTNS.id = "CVreadBTNS";
  CVreadBTNS.classList.add("flexColumn");
  CVSecTXT.appendChild(CVreadBTNS);

  const CVdownBtn = document.createElement("a");
  CVdownBtn.href = "./assets/txt/CV_Zuzanna_Zyla.pdf";
  CVdownBtn.classList.add("CVbtns");
  CVdownBtn.id = "CVdownBtn";
  CVdownBtn.innerText = "Download CV";
  CVdownBtn.download = "CV_Zuzanna_Zyla.pdf";
  CVdownBtn.target = "_blank";
  CVreadBTNS.appendChild(CVdownBtn);

  const CVcloseBtn = document.createElement("a");
  CVcloseBtn.classList.add("CVbtns");
  CVcloseBtn.id = "CVcloseBtn";
  CVcloseBtn.innerText = "Close CV";
  CVreadBTNS.appendChild(CVcloseBtn);

  CVcloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    main.removeChild(ReadCVSec);
  });

  const arrowUp = document.createElement("div");
  arrowUp.classList.add("arrowUp");
  arrowUp.classList.add("arrowNav");
  arrowUp.innerText = "Home";
  main.appendChild(arrowUp);

  arrowUp.addEventListener("click", (e) => {
    nav.scrollIntoView();
  });
};

window.addEventListener("load", (e) => {
  loadPage();
  createWorkPage();
  createContact();
});
