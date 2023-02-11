const Counter = {
  template: `
  <div class="counter">
    <h2>Counter</h2>
    <p>Счётчик: {{ counter }}</p>
  </div>`,
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

const AttributeBinding = {
  template:`
  <div class="date">
    <h2>Date</h2>
    <span v-bind:title="message">
      Наведи на меня курсор на пару секунд, чтобы
      увидеть динамически связанное значение title!
    </span>
  </div>
  `,
  data() {
    return {
      message: 'Страница загружена ' + new Date().toLocaleString()
    }
  }
}

const EventHandling = {
  template:`
  <div class="event-handling">
    <h2>Reverse message</h2>
    <p v-if="seen">{{ message }}</p>
    <button v-on:click="reverseMessage">Перевернуть сообщение</button>
    <button v-on:click="toggle">Скрыть сообщение</button>
  </div>
  `,
  data() {
    return {
      message: 'Привет, Vue.js!',
      seen: true
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    },
    toggle(){
      this.seen = !this.seen
    }
  }
}

const TwoWayBinding = {
  template:`
  <div class="two-way-binding">
    <h2>To way building</h2>
    <p>{{ message }}</p>
    <input v-model="message"/>
  </div>
  `,
  data() {
    return {
      message: 'Hi'
    }
  }
}

const ListRendering = {
  template:`
  <div id="list-rendering">
    <h2>ListRendering</h2>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
  `,
  data() {
    return{
      todos: [
        {text: 'Read'},
        {text: 'Work'},
        {text: 'Homework'}
      ]
    }
  }
}

const App = {
  data(){
    return {
      name: 'LearningVue'
    }
  },
  template: `
  <div class="root">
    <h1>{{ name }}</h1>
    <counter></counter>
    <attribute-binding></attribute-binding>
    <event-handling></event-handling>
    <two-way-binding></two-way-binding>
    <list-rendering></list-rendering>
  </div>`,
  components:{
    Counter,
    AttributeBinding,
    EventHandling,
    TwoWayBinding,
    ListRendering
  }
}

Vue.createApp(App).mount('#app')
