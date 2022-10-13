<div align="center">

<div>
<img src="https://user-images.githubusercontent.com/84328632/195548728-312f7f9b-5ed8-4831-9507-85b9f4b7a7ce.png" width="80" height="80">
<h1>공존의 발자취</h1>
</div>

<p>MDX 기반 기술 블로그입니다.
웹 개발에 관한 글을 주로 작성합니다.</p>

<div>
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white">
<img src="https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
</div>

<br />
<strong>Made by GongZone</strong>
<br />

[https://gongzone.github.io/](https://gongzone.github.io/)

<br />
</div>
<hr />

## 목차

- [프로젝트의 목적](#)
- [기술 선택의 이유](#)
- [UI / UX](#)

## 프로젝트의 목적

**공존의 발자취**는 개인 기술 블로그입니다. <br />
**개발자로서의 성장**을 위한 **기록**과 **공유**를 주 목적으로 합니다.

- 개발 지식 및 일상 기록 및 공유
- 포트폴리오 (나에 대한 소개, 프로젝트 소개)

## 🎃 기술 선택의 이유

아래는 개인 블로그를 운영하겠다고 결정한 순간, 고민했던 여러 선택지들입니다. (외부 플랫폼 서비스 제외)

1. 데이터베이스 및 api 서버 구축 (Remix or Next.js + db)
2. Headless CMS (Gatsby + sanity or strapi or contentful ...)
3. **Local data (Gatsby or Next.js)**

제가 가장 이상적이라 생각하는 선택지는 1번이였습니다. 왜냐하면 유연하게 데이터 모델을 작성할 수 있고, 기능 추가에 있어 확장성이 높은 블로그를 구축할 수 있기 때문입니다. 한마디로 **완전한 커스터마이징**이 가능하다는 것이 그 이유입니다.

그러나 실제로 선택한 선택지는 3번입니다. 왜냐하면 제가 가장 중요시 여겼던 원칙은 **'블로그를 운영함에 있어 어떠한 비용도 들지 않아야 한다.'** 이기 때문입니다.

작성한 포스트 데이터를 로컬에서 관리한다고 했을 때, 가장 효과적인
프레임워크는 **Gatsby**라고 생각했습니다. **Next.js**의 경우는 데이터 쿼리 시스템 구축을 위해 많은 부분 node file system을 직접적으로 조작하여야 하였습니다. 그러나 Gatsby의 경우 graphql을 기반으로 다양한 플러그인을 제공하였기 때문에 데이터를 파싱하고 쿼리하는 부분이 상당히 수월했습니다. 따라서 Gatsby 프레임워크를 선택하여 SSG 방식으로 블로그를 구현하였습니다.
