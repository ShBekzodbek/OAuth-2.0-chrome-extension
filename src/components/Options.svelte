<!-- @format -->
<script lang="ts">
  chrome.runtime.sendMessage({ message: "get_access_token" });
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
      Login with Google
    </div>
  </div>
</div>
