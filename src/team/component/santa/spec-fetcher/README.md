# Spec Fetcher

## Prerequisite

- 사용 전 자신의 환경에 [github CLI](https://cli.github.com/)와 최신 버전의
  [deno](https://deno.land/)를 설치해주세요.
- [github hosted runner](https://docs.github.com/en/actions/using-workflows/using-github-cli-in-workflows)에는
  github CLI가 pre-install 되어있어 별도의 세팅이 필요없습니다. 이외의
  환경에서는 직접 세팅하여 사용해주세요.
- github workflow 혹은 action에서 github CLI를 사용하기 위해서는
  [env에
  GH_TOKEN을 지정해주셔야 합니다.](https://docs.github.com/en/actions/using-workflows/using-github-cli-in-workflows)
  ```yaml
  - name: 예시
    shell: bash
    run: <command for executing below how-to-use script>
    env:
      GH_TOKEN: <token>
  ```

<br />

## How to use

```shell
deno run -A --unstable https://deno.land/x/riiidx@{릴리즈 버전}/team/component/santa/spec-fetcher/src/index.ts [options]
```

<br />

## Usage

```shell
Options:

  -h, --help                 - Show this help.                                                                           
  -i, --input   <file-path>  - path to a single lock file. Directory path is currently not supported  (required)         
  -o, --output  <file-path>  - path to output directory                                               (Default: ".specs")
```

<br />

### 📤 `-i, --input <path-to-spec-file>` (required)

버전 관리용 파일의 경로를 지정합니다. 현재 복수 input과 directory 지정은
지원하지 않습니다.\
버전 관리용 파일은 아래 형식의 yaml 파일으로 작성되어야 합니다.\
사용 예시는
[sample-spec.yml](https://github.com/riiid/riiidx/blob/main/src/team/component/santa/spec-fetcher/README.md)
파일을 참고해주세요.

```yaml
specs:
  # 아래 형식으로 복수의 spec item을 명시할 수 있습니다.
  - repository: 'username/repository' 형식의 string
    release-title: spec file을 가져올 release의 이름, string 또는 number
    filename-pattern: 가져올 spec file 이름 혹은 이름의 glob 패턴, string # (optional) (default: spec.json)
                      glob 패턴을 작성하시는 경우 따옴표(')로 감싸주셔야 string으로 인식됩니다.
  # ...
```

<br />

### 📥 `-o, --output <path-to-output-directory>` (default: `.specs`)

spec 파일들을 저장할 경로를 지정합니다.\
spec 파일들은 각각 `path-to-output-directory/username/repository` 경로에
저장됩니다.
