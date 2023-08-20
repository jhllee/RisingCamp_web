## 리액트 특징
- React 컴포넌트는 다른 컴포넌트의 데이터를 바로 가져올 수 없다.
- 그래서 props 개념을 사용함으로써 컴포넌트를 재사용하거나 한 컴포넌트에서 다른 컴포넌트로 데이터를 전달할 수 있다.

# props란?

- 부모 컴포넌트에서 자식 컴포넌트로 넘기는(전달되는) 데이터를 props라고 한다.
- properties(속성)의 약자이다.
- props는 객체 형태의 데이터이다.
```
props = {
    name: "Smith",
    age: 25,
    position: "student"
}
```
- 복수의 props를 통해 여러가지 데이터를 전달 가능하다.
```
<Child name="Smith" age=25 position="student" />
```
- 자식 컴포넌트는 객체 인자를 통해 props를 받아온다.
```
function Child(props) {
    return {
        <div>{props.name}</div>
        <div>{props.age}</div>
    }
}
```
### 예시코드 :
```
//App.js - 부모 컴포넌트
import Person from './Person';

function Parent() {
    return <Person name="Smith" />;
}

//Person.js - 자식 컴포넌트
function Person(props) {
    return <div>내 이름은 {props.name}입니다</div>;
}

export default Child;
```
# children props란?
- 컴포넌트의 여는 태그와 닫는 태그 사이에 위치한 내용을 다른 컴포넌트로 전달하고, 해당 내용을 동적으로 표시할 수 있도록 도와주는 리액트에 내장된 props이다.
- props.children은 컴포넌트의 여는 태그와 닫는 태그 사이에 위치한 모든 내용을 나타낸다.
- 사용자 지정 컴포넌트를 내장 html 요소(ex. div태그)처럼 Wrapper(컨텐츠를 감싸는) 컴포넌트처럼 쓸 수 있는 방법이다.


### 예시코드 :
```
function MyComponent(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}
```
위 컴포넌트를 사용할 때 다음과 같이 쓴다.
```
<MyComponent>
    <p>Hello, world!</p>
</MyComponent>
```
**MyComponent 태그 사이에 있는** p 태그 문구가 MyComponent 컴포넌트의 props.children에 해당한다.   
따라서 MyComponent 컴포넌트가 화면에 렌더링되면 "Hello, world!" 문구가 출력된다.

---
### References
- Udemy: React 완벽 가이드 with Redux, Next.js, TypeScript