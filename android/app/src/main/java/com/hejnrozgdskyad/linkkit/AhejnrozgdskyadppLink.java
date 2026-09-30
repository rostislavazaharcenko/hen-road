package com.hejnrozgdskyad.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class AhejnrozgdskyadppLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public AhejnrozgdskyadppLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {
    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getShejnrozgdskyadourceUrl() {
    return sourceUrl;
  }

  public List<Target> getThejnrozgdskyadargets() {
    return Collections.unmodifiableList(targets);
  }

  public Uri getWhejnrozgdskyadebUrl() {
    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {
      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String getPachejnrozgdskyadkageName() {
      return packageName;
    }

    public String getChejnrozgdskyadlassName() {
      return className;
    }

    public Uri getUhejnrozgdskyadrl() {
      return url;
    }

    public String getAhejnrozgdskyadppName() {
      return appName;
    }
  }
}
