iframe-message
==============

Sent messages between iframe and its parent window

Set environment
---------------
To localy set environment we need to sutup two domains **external.frame** and **internal.frame**
* host
* httpd-vhosts.conf

host
----
    127.0.0.1 external.frame
    127.0.0.1 internal.frame
    

httpd-vhosts.conf
-----------------
    <VirtualHost internal.frame:80>
        <Directory "/Users/Krzysztof/Sites/Workspace/frames/internal">
            Order allow,deny
            Allow from all
        </Directory>
        DocumentRoot "/Users/Krzysztof/Sites/Workspace/frames/internal"
    </VirtualHost>

    <VirtualHost external.frame:80>
        <Directory "/Users/Krzysztof/Sites/Workspace/frames/external">
            Order allow,deny
            Allow from all
        </Directory>
        DocumentRoot "/Users/Krzysztof/Sites/Workspace/frames/external"
    </VirtualHost>
