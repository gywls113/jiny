# 깃이란 무엇인가?

소프트웨어 개발 및 관리에서 자료를 버전/기간/작성내용순서에따라 문서를 관리하는 버전관리시스템이라고 한다. <br />
이는 한사람이 혼자 작업을 진행할 수도 있지만, 하나의 데이터를 여러사람이 관리하여 처리할 수 도 있다.

---

## 핵심 키워드

- git config --global user.name "사용자 이름"
- git gonfig --global user.email "사용자 이메일"
- git clone 깃 주소
- git status
- git add 파일 또는 폴더명
- git commit -m "내용요약"
- git push
- git pull
- git reset (ctrl+z와 같은 기능/한번 뒤로 되돌리기)
- git reset HEAD^ (commit하기 전 상태로 돌아간다)

---

## 깃 사용법 기초1

1. 컴퓨터에 연결할 사용자의 계정을 등록한다. (사용자이름, 이메일주소)

``` shell
$ git config --global user.name "아이디"
$ git config --global user.email "이메일 주소"
```

2. github 사이트에서 개인 저장소를 생성
- 사이트에서 `new repository`를 클릭
- 이름생성(치기 쉽고 소문자위주로 작성), 자료 공개여부(공개로 해놓고 사용), README파일 생성여부(체크안하고 직접 만들어 보는걸 권장)

3. 내컴퓨터에서 github사이트에 있는 주소에 담긴 자료(주소를 복사해서 처리)를 그대로 복제한다.
- 웹에 존재하는 github저장소 이름이 내컴퓨터에 폴더명으로 저장이 되기 때문에 이름이 겹치지 않도록 주의

```shell
$ git clone http://내저장소주소.git
```

4. 최초의 테스트 및 파일인식은 `README.md`라는 파일생성 후 내용 작성

```shell
$ touch README.md
$ echo "README파일 생성 및 체크" >> README.md 
(""속의 내용을 README.md파일에 담겠다는 의미)
```

5. 선택자료를 첨부 및 내용요약작성 그리고 전송

```shell
$ git add 파일/폴더 선택
$ git add . (or *) -> 전부다 첨부하겠다는 의미
$ git commit -m "첨부되는 내용을 요약작성"
$ git push
```

6. 자료의 상태점검은 수시로 해야한다.

```shell
$ git status
```

7. 혹여 다른 컴퓨터에도 clone되어 있는 상태라면, 서버의 자료를 업데이트로 설정해야한다.

```shell
$ git pull
```

---


