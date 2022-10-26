# vuejs-3-book

[한 권으로 배우는 vue3](http://www.yes24.com/Product/Goods/103336234) 를 학습하기 위한 프로젝트  
github : https://github.com/dongprojectteam/vue3_examples

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

## TypeScript ssc project

types 프로젝트 참고
