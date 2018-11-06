<script lang="tsx">
import {
 Vue, Component, Prop, Watch,
} from 'vue-property-decorator';

@Component({})
export default class FilterItem extends Vue {
  @Prop({})
  private isSpinner!: boolean;

  bar!: String;

  @Watch('isSpinner')
  onIsSpinnerChanged(val: boolean, oldVal: boolean) {
    let index = 100;
    if (val === true) {
      const timer = setInterval(() => {
        if (index === 0) {
          clearInterval(timer);
          return;
        }
        index = index > 0 ? index - 10 : 0;
        console.log(index);
        this.bar = `transform: translate3d(-${index}%, 0px, 0px);`;
      }, 1000);
    } else {
      this.bar = 'transform: translate3d(-100%, 0px, 0px);';
    }
  }
  // eslint-disable-next-line
  render(h: any, context: any) {
    const spinner = this.isSpinner ? (
      <div class="spinner" role="spinner">
        <div class="spinner-icon" />
      </div>
    ) : (
      ''
    );
    return (
      <div class="nprogress">
        <div class="bar" role="bar" style={this.bar}>
          <div class="peg" />
        </div>
      </div>
    );
  }
}
</script>
<style lang="stylus" scoped>
// barColor = #29d
barColor = red
.nprogress
  pointer-events none
  .bar
    transform translate3d(-100%, 0px, 0px)
    transition all 200ms ease 0s
    background barColor
    position fixed
    z-index 1031
    top 0
    left 0
    width 100%
    height 2px
  .peg
    display block
    position absolute
    right 0px
    width 100px
    height 100%
    box-shadow 0 0 10px barColor, 0 0 5px barColor
    opacity 1
    transform rotate(3deg) translate(0px, -4px)
    -webkit-transform rotate(3deg) translate(0px, -4px)
    -ms-transform rotate(3deg) translate(0px, -4px) /* Remove these to get rid of the spinner */
  .spinner
    display block
    position fixed
    z-index 1031
    top 15px
    right 15px
  .spinner-icon
    width 18px
    height 18px
    box-sizing border-box
    border solid 2px transparent
    border-top-color barColor
    border-left-color barColor
    border-radius 50%
    -webkit-animation nprogress-spinner 400ms linear infinite
    animation nprogress-spinner 400ms linear infinite
.nprogress-custom-parent
  overflow hidden
  position relative
  .nprogress
    .spinner, .bar
      position absolute
@keyframes nprogress-spinner
  0%
    -webkit-transform rotate(0deg)
  100%
    -webkit-transform rotate(360deg)
@keyframes nprogress-spinner
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)
</style>
