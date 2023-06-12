<!-- @format -->
<script lang="ts">
  function signIn() {
    chrome.runtime.sendMessage({ message: "get_access_token" });
  }
  //   chrome.runtime.sendMessage({ message: "get_access_token" });
</script>

<div class="row">
  <div class="col-md-3">
    <div class="btn btn-outline-dark" role="button" style="text-transform:none">
      <img
        width="20px"
        style="margin-bottom:3px; margin-right:5px"
        alt="Google sign-in"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
      />
      <button class="btn" on:click={signIn}> Login with Google </button>
    </div>
  </div>
</div>

<style>
  .btn {
    background-color: #ffffff;
    border: none;
  }
  .btn:active {
    border: none;
  }
  .btn:focus {
    border: none;
  }
  .btn::after {
    border: none;
  }
  .btn::content {
    border: none;
  }
</style>
