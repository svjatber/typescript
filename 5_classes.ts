class Animal {
    protected voice: string = 'miy'
    public color: string = 'black'
    private go(){
        console.log(this.voice)
    }
}
class Cat extends Animal{
    setVoice(voice: string): void{
        this.voice = voice
        console.log(this.color);
    }
}
const cat = new Animal()
console.log(cat.color);
const cat1 = new Cat()
cat1.setVoice('gavgav')
console.log(cat1.color);

// abstact classes
abstract class Component{
    abstract render(): void
    info?: () => number
}

class AppComponent extends Component {
    render() {
        console.log('sdadsdsa')
    }
}
