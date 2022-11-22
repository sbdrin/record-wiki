<script>
import config from "../config";
export default {
  name: "gDrawer",
  data() {
    return {
      show: false,
      k: 0,
      currentCommand: "",
      extensionId: "",
      extensionVersion: "",
      description: "this is a description",
    };
  },
  methods: {
    _postMessage(message) {
      document.getElementById("selenium-ide-iframe") &&
        document
          .getElementById("selenium-ide-iframe")
          .contentWindow.postMessage({ ...message }, "*");
    },
    open(command) {
      this.currentCommand = command;
      this.description = window.sides[this.currentCommand]?.description;
      fetch(config.base + "sides/" + window.sides[this.currentCommand]?.path)
        .then((res) => res.json())
        .then((data) => {
          this.edit(data);
        });
      this.show = true;
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 190);
    },
    close() {
      this._postMessage({ type: "ms-close" });
      setTimeout(() => {
        document.body.style.overflow = "auto";
        this.show = false;
        this.currentCommand = "";
        this.refresh();
      });
    },
    edit(side) {
      this._postMessage({ type: "ms-edit", side });
      this._postMessage({
        type: "ms-highlight",
        highlightCommand: this.currentCommand,
      });
    },
    refresh() {
      this.k++;
    },
  },
  beforeMount() {
    window
      .fetch(config.base + "sides/side.config.json")
      .then((res) => res.json())
      .then((data) => {
        window.sides = data;
        window.sideNames = Object.keys(data);
        window.postMessage({ type: "showButton" }, "*");
      });
    this.extensionId =
      window.sessionStorage.getItem("selenium-ide-id") || window.name;
    window.addEventListener("message", (event) => {
      if (event.data.type === "open") {
        this.open(event.data.command);
      } else if (event.data.type === "ms-id") {
        window.sessionStorage.setItem("selenium-ide-id", this.extensionId = event.data.id);
      }
    });
  },
  mounted() {
    this.refresh()
    window.addEventListener(
      "visibilitychange",
      () => window.document.visibilityState === "hidden" && this.close()
    );
  },
  render() {
    return (
      <div
        class="g-drawer"
        style={`display:${this.show ? "block" : "none"}`}
        onClick={this.close}
      >
        <div class="rtl" onClick={(e) => e.stopPropagation()}>
          <div class="header">
            <div>
              演练场
              {this.currentCommand ? (
                <span title={this.description}> - {this.currentCommand}</span>
              ) : (
                ""
              )}
            </div>
            <div class="close-wrapper">
              <span onClick={this.close} class="close"></span>
            </div>
          </div>
          <div class="body">
            {this.extensionId ? (
              <iframe
                id="selenium-ide-iframe"
                key={this.k}
                width="100%"
                height="100%"
                src={`chrome-extension://${this.extensionId}/index.html`}
                frameborder="0"
              ></iframe>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  },
};
</script>

<style lang="scss">
.g-drawer {
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 66;
  overflow: hidden;
  margin: 0 !important;
  background: rgba($color: #000000, $alpha: 0.1);

  .rtl {
    top: 0;
    bottom: 0;
    right: 0;
    width: 66%;
    position: absolute;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    border-left: 1px solid #cfd8dc !important;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.12);
    animation: rtl-drawer-in 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    .header {
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
      line-height: 24px;
      font-size: 18px;
      color: #303133;
      .close-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .description {
          font-size: 16px;
        }

        .close {
          margin-right: 5px;
          margin-bottom: 5px;
          cursor: pointer;
          display: inline-block;
          width: 15px;
          height: 2px;
          background: #666;
          transform: rotate(45deg);

          &::after {
            content: "";
            display: block;
            width: 15px;
            height: 2px;
            background: #666;
            transform: rotate(-90deg);
          }
        }
      }
    }
    .body {
      flex: 1;
    }
    #selenium-ide-iframe {
      flex: 1;
    }
  }
}
</style>
