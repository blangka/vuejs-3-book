# vuejs-3-book

[한 권으로 배우는 vue3](http://www.yes24.com/Product/Goods/103336234) 를 학습하기 위한 프로젝트  
github : https://github.com/dongprojectteam/vue3_examples

## vue chrome에서 디버깅 하는 법

vue.config.js에서 devtool 추가

```js
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        devtool: "source-map",
    },
});
```

## Vue3의 대표적인 기능

1. [Composition API](https://kyounghwan01.github.io/blog/Vue/vue3/composition-api/#composition-api%E1%84%80%E1%85%A1-%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%80%E1%85%A6-%E1%84%83%E1%85%AC%E1%86%AB-%E1%84%87%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC)  
   composition API는 컴포넌트를 작성 할때 함수 기반의 방법을 제시한다.  
   특정 역할에 따른 함수의 분리를 통해 가독성이 높고 잘조직화된 코드를 만들수 있게 해준다.

2. Suspense  
   컴포넌트가 데이터를 받아오기 전까지 기본 컨텐츠를 표시 할수 있는 기능이다  
   스켈레톤이라 불리는 UI 를 먼저 띄우고 데이터 로딩이 완료 되면 실제 화면을 띄우는 것이다.
3. Teleport  
   컴포넌트를 다른 DOM에 렌더링 할수 있는 기능이다  
   React의 Portals과 비슷한 기능이다
4. 여러 개의 v-model 디렛티브  
   v-model 디렉티브를 여러개 사용 할수 있다  
   기본 HTML 태그들은 두개 결합 매개변수를 가지는 경우가 없어 문제가 되지 않을수 있지만. 사용자 컴포넌트들은 두개 이상의 양방향 결합 매개변수가 필요할수 도 있다.  
   예를 들어 이전 vue2의 경우 다음과 같이 사용했었다

```html

<MyComponent v-bind:param1 v-on:update="updateParam1" v-bind:param2 v-on:update="updateParam2"/>
```  

vue3에서는 다음과 같이 사용 할수 있다

```html

<MyComponent v-model:param1 v-model:param2/>
```

5. 프록시로 진화된 반응성  
   기존의 경우 배열에 아이템이 추가되어도 객체 변경에 대해서 반응 하지 않았다. getter/setter의 호출이 아닌 경우에는 반응하지 않았다.  
   예를 들어 기존의 vue2의 경우에는 아래 기능을 수행하지 못하였다.

```js
obj = {
    item: 0
}
obj.item2 = 1
```

vue 3에서는 아래와 같이 하면 바로 확인 가능하다.

```js
const obj = reactive({})
obj.item = 0
obj.item2 = 1
```

6. Fragment
   Fragment는 컴포넌트의 루트 요소를 렌더링 하지 않는 기능이다  
   vue2에서는 기본적으로 하나의 루트 요소만 렌더링 할수 있었다.  
   그러한 사유로 항상 template아래에 div로 감싸 주었지만 vue3에서는 그렇게 하지 않아도 에러가 발생하지 않는다.
7. Emits Option  
   $emit()은 하나의 컴포넌트가 부모 컴포넌트에게 이벤트 전달하기 위해 존재하는 함수 이다. vue3에서는 컴포넌트 옵션 emits를 이용해 전송할 이벤트를 정의 할수 있다.

## Vue3 핵심 문법

1. single file Component  
   template script style로 나눠서 코드를 관리한다.
2. 생명 주기
    1. beforeCreate : 컴포넌트를 생성하기 전에 호출 된다. setup 함수 자체가 해당 것을 대체한다.
    2. created : 컴포넌트가 생성되고 나서 호출 된다. setup 함수 자체가 해당 것을 대체한다. 컴포넌트의 옵션에 접근이 가능하기 때문에 data 옵션에 선언한 데이터들을 초기화 할 때 많이
       사용한다.
    3. beforeMount : 컴포넌트가 마운트 되기 전에 호출 된다. vue는 virtual DOM을 사용하기 때문에 컴포넌트가 마운트 되기 전에 virtual DOM을 생성한다.
    4. mounted : 컴포넌트가 마운트 된 후에 호출 된다. 이 순간 부터 실제 엘리먼트를 참조할수 있다.
    5. beforeUpdate : 컴포넌트가 업데이트 되기 전에 호출 된다. virtual dom이 수정되고 이 수정 사항이 dom에 반영 되기 진전에 호출 되는 것이다.
    6. updated : 컴포넌트가 업데이트 된 후에 호출 된다. 데이터가 변경 되어 dom이 변경 완료된 시점에 오출된다.
    7. beforeUnmount : 컴포넌트가 언마운트 되기 전에 호출 된다. 컴포넌트가 화면에서 사라지기 직전에 호출 된다.
    8. unmounted : 컴포넌트가 언마운트 된 후에 호출 된다. 컴포넌트가 화면에서 사라진 후에 호출 된다. 이 순간부터 모든 디렉티브와 이벤트가 사용이 불가능해 진다.
    9. activated : keep-alive 태그는 컴포넌트가 다시 랜더링 되는 것을 방지하고 상태를 유지 하기 위해 쓰인다.
    10. deactivated : keep-alive로 상태가 유지되던 컴포넌트가 효력을 상실하면 호출된다.
    11. renderTracked : 컴포넌트가 랜더링 되는 동안에 트랙킹 되는 것을 추적한다. virtual dom을 변경 시키는 것을 추적할 수 있다.
    12. renderTriggered : onMounted, onActivated, onUpdated 등의 훅이 호출되기 전에 호출된다.
    13. errorCaptured : 컴포넌트의 랜더링 도중에 에러가 발생하면 호출된다. 이 훅은 에러를 잡아내고 에러를 처리 할 수 있다.
3. 선언적 랜더링  
   변수를 선언하고 값을 넣으면 자동으로 DOM에 업데이트가 된다. 예시는 아래와 같다.

        <template>
        <div>
            <h1>{{ title }}</h1>
            <p>{{ message }}</p>
        </div>
        </template>
        
        <script>
        export default {
        data() {
            return {
            title: 'Hello Vue',
            message: 'Hello Vue'
            }
        }
        }
        </script>

4. 컴포넌트 생성  
   하나의 커다란 어플리케이션을 작은 요소로 분해해 은닉화를 하고 재사용성을 가지게 한다. createApp 함수를 이용해서 생성된 Vue 애플리케이션 인스턴스를 참조해야 한다.
   import { createApp } from 'vue'
   const app = createApp({})

## Basic project

실습 예제 기본 문법 테스트 프로젝트

MyButton에서 v-bind="$attrs"는 모든 속성 그대로를 넘겨 주겠다는 의미이다. 이렇게 되면 MyButton name="reset" 과 같이 하면 button 태그에도 name속성이 reset으로
전달된다  
v-bind:class를 보면 배열을 배핑시 킬수 있ㄷ. ref나 reactive를 사용하면 양방향 결합이 가능하게 만든 변수를 프록시 변수하고 한다. 이러면 본연의 기능을 바로 접근할수 있어서 편하다.

## TODO project

todo 프로젝트는 기본적인 CRUD를 구현하는 프로젝트이다.

컴포넌트 구조

        - App
            - TodoListContainer
               - TodoListNew
               - TodoListMain
                  - TodoListMenu
                  - TodoList

UI 참고는 Bootstrap 5를 이용해서 만들 예정이다.
(https://getbootstrap.kr/docs/5.0/components/buttons/)

변수를 공유 하는 방법은 다음과 같다.

1. Props/Emits
2. config.globalProperties
3. Vuex
4. Provide/Inject

해당 과제에서는 4번을 이용할 예정이다.

TodoListMenu 에서는 [computed](https://goodteacher.tistory.com/541) 를 이용하였다  
로직을 가지고 계산후 값을 리턴하는 경우를 computed 라고 한다.  
watch 로 데이터 값이 변경 되면 동작하게 되는 것이다.  
그러면 언제 watch를 쓰고 언제
computed를 쓰는가?  
computed는 템플릿 내의 값이 data와 종속되었을 경우 사용하는게 유리합니다.왜냐하면 같은 경우에 watch를 사용하면 중복 호출하거나, 코드가 복잡해주기 때문입니다. 또한 computed의 값은 캐싱되기
때문에, 리렌더링 됬을 때, 같은 값이 들어왔다면 연산하지 않습니다. 그에 반해 watch는 같은 값이여도 연산을 다시 합니다. 컴포넌트가 리렌더링이 많이 되나, 값이 바뀔일이 없다면 computed를 필히
써야합니다.

watch는 지정한 값이 변경된 시점에서 내가 원하는 액션(api call, route.push())을 하기 원할 때 사용합니다.  
watch( source, callback, options)

[emit](https://webruden.tistory.com/925)
부모와 자식간의 event 전달시에 사용

[참고 자료](https://v3.ko.vuejs.org/guide/component-provide-inject.html)

TODO LIST 추가 및 필터 작업을 통해 동작 원리 파악 및 필터링을 사용하였고 부모와 자식간의 이벤트 전달에 대해서 알아 보았습니다.

## TypeScript ssc project

types 프로젝트 참고

## WebApplication

webapplication 프로젝트 참고

필수적인 요소들을 설치하고 구현하며 다양한 기능을 수행해보기 위해 만든 프로젝트

NavBar.vue  
bootstrap 이 제공하는 me-auto 클래스는 해당 클래스가 쓰인 태그와 다음에 나오는 태그의 간격을 자동으로 간은 간격으로 정렬한다.   
me-auto 는 e는 end s는 start를 의미 한다.

options api 생명 주기 vs 컴포지션 api 의 생명 주기

| Options API의 생명주기 | 컴포지션 API의 생명 주기   |
|-------------------|-------------------|
| beforeCreate      | setup             |
| created           |                   |
| beforeMount       | onBeforeMount     |
| mounted           | onMounted         |
| beforeUpdate      | onBeforeUpdate    |
| updated           | onUpdated         |
| beforeUnmount     | onBeforeUnmount   |
| unmounted         | onUnmounted       |
| errorCaptured     | onErrorCaptured   |
| renderTracked     | onRenderTracked   |
| renderTriggered   | onRenderTriggered |

## database

sql lite를 활용하여 데이터베이스를 구축하고 데이터를 저장하고 불러오는 방법을 배웠습니다.

database 프로젝트 참고


