# Wes Bos' Mastering Markdown

## 11/10/2018 10:30pm

Just use your favorite code editor

-You already know the tool

Utilize a plugin

_Italics_

**Bold**

~~Strikethrough~~

# h1

## h2

### h3

#### h4

##### h5

###### h6

h1
========

h2
--------

<http://Google.com>

[CLickable to Link to Google](http://google.com)

[Link with mouseover](http://google.com "DIFFERENT TEXT")

[Link to Goog by Ref][1]

[1]: http://google.com

![Pic](http://unsplash.it/250/250?random "Tool Tip")

![Pic by Ref][pic]

[pic]: http://unsplash.it/100/100?random

<img src="http://unsplash.it/75/75?random">

* List
* Listish
* Listishsh

+ List
+ Lisisit

- Listist
- Listz
    - Inner list
        
        Inline

        ```python
        print("Python is magic")
        ```

        ![](http://unsplash.it/75/75?random)

1. Some
2. SomeSome
3. SomeSomeSome

Line<br>Break

<hr>

---

> Block quotes are neat
> > Multiple lines
> > 
> > Space in between

    var x = 100;
    const dog ='snickers'

```php
$age = 50;
$name = "Todd";
echo strtoupper($name);
```

Inline `let code = c += y;` code

```diff
var x = 100;
- var y = 200;
+ var y = 300;
```

| Dog's Name | Dog's Age |
| ---------: | :-------: |
| Snickers   | 2         |
| Prudence   | 8         |

* [ ] Milk
* [ ] Eggs
* [ ] Bread
* [X] Whisky