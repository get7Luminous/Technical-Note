# Technical Notes

HTML로 작성한 기술 노트를 한곳에서 관리하고 GitHub Pages로 공개하기 위한 저장소입니다.

## 현재 노트

- **Deep Neural Network** — MLP, CNN, RNN/LSTM, Transformer
- **Speaker Identification** — 음성 신호부터 화자 임베딩과 판정까지
- **Face Identification** — STM32N6 기반 얼굴 식별 파이프라인

## 공개 구조

GitHub Pages에는 `docs` 폴더의 내용이 공개됩니다.

```text
docs/
├─ index.html
├─ .nojekyll
├─ dnn/
│  └─ index.html
├─ speaker-identification/
│  └─ index.html
└─ id6-face-identification/
   └─ index.html
```

각 노트 폴더에는 시작 문서인 `index.html`과 해당 문서가 사용하는 CSS, JavaScript, 이미지 등의 자산을 함께 둡니다.

## 새 노트 추가 방법

1. `docs` 아래에 영문 소문자와 하이픈으로 폴더를 만듭니다.
2. 시작 HTML의 이름을 `index.html`로 지정합니다.
3. CSS, JavaScript, 이미지 링크는 로컬 절대경로가 아닌 상대경로를 사용합니다.
4. `docs/index.html`에 새 노트 카드를 추가합니다.
5. 변경 내용을 커밋하고 GitHub에 푸시합니다.

예시:

```text
docs/mcu-ai-optimization/index.html
```

## GitHub Pages 설정

저장소의 **Settings → Pages → Build and deployment**에서 다음과 같이 지정합니다.

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/docs`

## 모바일 호환 체크

- `<meta name="viewport" content="width=device-width, initial-scale=1">` 포함
- 파일명 대소문자 일치
- 마우스 hover 없이 주요 기능 사용 가능
- 작은 화면에서 불필요한 가로 스크롤이 생기지 않도록 확인
- `C:\...` 또는 `file://...` 형태의 로컬 링크 사용 금지

